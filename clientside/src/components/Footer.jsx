import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------ Left Section ------------ */}
        <div className="flex items-start gap-5">
  <img className="w-40" src={assets.logo} alt="" />

  <p className="w-full md:w-2/3 text-gray-600 leading-6">
    DocSpot is a modern healthcare appointment platform designed to bridge the gap between patients and doctors.
    With a wide network of specialists, real-time availability, secure payments, and a seamless booking experience, DocSpot empowers users to access quality healthcare whenever they need it.
    Our goal is to make medical care simpler, faster, and more accessible for everyone.
  </p>
</div>


        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+250-784-652-570</li>
            <li>docspot108@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright Text ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 docspot - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
