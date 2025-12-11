import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* ---------- Left Side -------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          <p className="animate-fade-in">Book Appointment</p>
          <p className="mt-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-blue-600 font-semibold px-10 py-4 rounded-full mt-8 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
        >
          Create account
        </button>
      </div>

      {/* ---------- Right Side -------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative z-10">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          src={assets.appointment_img}
          alt="Doctor appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
