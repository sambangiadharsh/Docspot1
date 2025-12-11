import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-semibold tracking-wide">
        Top Doctors to Book
      </h1>

      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-8 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="bg-white border border-blue-200 rounded-2xl overflow-hidden 
            cursor-pointer shadow-sm hover:shadow-xl 
            hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="bg-blue-50 h-48 w-full object-cover"
              src={item.image}
              alt=""
            />

            <div className="p-4 space-y-1">
              {/* Availability */}
              <div
                className={`flex items-center gap-2 text-sm ${
                  item.available ? "text-green-600" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                {item.name}
              </p>

              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-100 text-gray-700 px-12 py-3 rounded-full mt-10 
        shadow-sm hover:shadow-md hover:bg-blue-200 transition-all"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
