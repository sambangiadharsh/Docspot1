import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const appointmentId = params.get("appointmentId");
  const navigate = useNavigate();

  const { backendUrl, token } = useContext(AppContext);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post(
          backendUrl + "/api/user/verify-payment",
          { appointmentId },
          { headers: { token } }
        );

        if (data.success) {
          toast.success("Payment Successful!");

          // Auto-redirect after 2 seconds
          setTimeout(() => {
            navigate("/my-appointments");
          }, 2000);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.log(err);
        toast.error("Payment verification failed");
      }
    };

    verify();
  }, [appointmentId, backendUrl, token, navigate]);

  return (
    <div className="text-center mt-20 text-2xl font-bold text-green-600">
      Payment Successful 🎉  
      <p className="text-sm text-zinc-500 mt-2">Redirecting to appointments...</p>
    </div>
  );
};

export default PaymentSuccess;
