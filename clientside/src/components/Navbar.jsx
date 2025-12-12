import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  // Style for active NavLink
  const activeClass =
    "pb-1 border-b-2 border-primary text-primary transition";

  const linkClass =
    "pb-1 hover:text-primary transition";

  return (
    <nav className="flex items-center justify-between py-4 mb-5 border-b border-gray-300 px-3 md:px-0">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="DocSpot Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          HOME
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          ALL DOCTORS
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          CONTACT
        </NavLink>

        {/* ⭐ Admin Link */}
        <a
          href="https://docspot-admin.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          ADMIN
        </a>
      </ul>

      {/* Right Side → Auth + Dropdown */}
      <div className="flex items-center gap-4">

        {token && userData ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img className="w-9 h-9 rounded-full object-cover" src={userData.image} alt="" />
            <img className="w-3" src={assets.dropdown_icon} alt="" />

            {/* Dropdown */}
            <div className="absolute top-11 right-0 bg-white shadow-md rounded-lg w-48 py-3 hidden group-hover:block z-20">
              <p
                onClick={() => navigate("/my-profile")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/my-appointments")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Appointments
              </p>
              <p
                onClick={logout}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-primary text-white px-7 py-2.5 rounded-full hover:opacity-90 transition"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-7 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      <div
        className={`fixed md:hidden top-0 right-0 bottom-0 bg-white z-20 shadow-lg transition-all ${
          showMenu ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <img className="w-32" src={assets.logo} alt="" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <ul className="flex flex-col gap-4 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            HOME
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            ALL DOCTORS
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/about">
            ABOUT
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            CONTACT
          </NavLink>

          {/* ⭐ Admin Link */}
          <a
            href="https://docspot1.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            ADMIN
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
