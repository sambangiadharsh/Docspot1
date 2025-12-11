import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>DoctSpot</b> — your trusted platform for booking doctor
            appointments with ease and managing your healthcare needs in one
            place. At DoctSpot, we understand the stress and inconvenience of
            finding doctors, checking availability, and managing medical
            schedules. That’s why we built a platform that brings everything
            together seamlessly.
          </p>

          <p>
            DoctSpot is committed to transforming the healthcare experience
            through modern, user-friendly technology. We constantly work on
            improving our platform to ensure faster access, smoother booking,
            and better connectivity between patients and healthcare providers.
            Whether you're booking your first consultation or managing ongoing
            treatment — <b>DoctSpot is here to guide you every step of the way.</b>
          </p>

          <b className="text-gray-800">Our Vision</b>

          <p>
            Our vision at <b>DoctSpot</b> is to make healthcare more accessible,
            transparent, and convenient for everyone. We aim to bridge the gap
            between patients and doctors by offering a platform that simplifies
            appointment booking and provides quick access to trusted medical care
            whenever you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Book appointments quickly with real-time availability and instant confirmation.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Find trusted doctors, clinics, and specialists in your area with just one search.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Get appointment reminders, personalized suggestions, and a smooth healthcare journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
