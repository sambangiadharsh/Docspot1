import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="px-2">
      <p className="text-gray-600 text-lg font-medium">
        Browse through the specialist doctors.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">

        {/* Mobile Filter Button */}
        <button
          className={`py-2 px-4 border rounded-lg shadow-sm text-sm transition-all sm:hidden 
            ${showFilter ? "bg-primary text-white" : "bg-white"}
          `}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        {/* Filter Sidebar */}
        <div
          className={`flex-col gap-3 text-sm text-gray-700 p-4 rounded-xl shadow-md bg-white/70 backdrop-blur 
            border border-gray-200 transition-all 
            ${showFilter ? "flex" : "hidden sm:flex"}
          `}
        >
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, i) => (
            <p
              key={i}
              onClick={() =>
                speciality === item
                  ? navigate("/doctors")
                  : navigate(`/doctors/${item}`)
              }
              className={`w-[94vw] sm:w-48 pl-4 py-2 border rounded-lg cursor-pointer transition-all
                hover:bg-indigo-50 hover:shadow-sm
                ${
                  speciality === item
                    ? "bg-indigo-100 border-indigo-300 text-black"
                    : "border-gray-300"
                }
              `}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-2xl overflow-hidden cursor-pointer 
              shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <img className="bg-blue-50 h-48 w-full object-cover" src={item.image} alt="" />

              <div className="p-4 space-y-1">
                <div
                  className={`flex items-center gap-2 text-sm 
                    ${item.available ? "text-green-600" : "text-gray-500"}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full 
                    ${item.available ? "bg-green-500" : "bg-gray-400"}`}
                  ></span>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>

                <p className="text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Doctors;
