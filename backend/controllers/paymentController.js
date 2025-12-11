import Stripe from "stripe";
import appointmentModel from "../models/appointmentModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appt = await appointmentModel.findById(appointmentId);
    if (!appt) return res.json({ success: false, message: "Appointment not found" });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        payment_intent_data: {},  // ⭐ Required for payment_intent
       line_items: [
       {
        price_data: {
        currency: "inr",
        product_data: {
        name: `Doctor Appointment with ${appt.docData.name}`,
        },
        unit_amount: appt.amount * 100,
      },
      quantity: 1,
    },
  ],
  success_url: `${process.env.FRONTEND_URL}/payment-success?appointmentId=${appt._id}`,
  cancel_url: `${process.env.FRONTEND_URL}/my-appointments`,
});

    // Store paymentIntent ID (important!)
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      paymentIntent: session.payment_intent,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export const verifyPayment = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      payment: true,
    });

    res.json({ success: true, message: "Payment successful!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
