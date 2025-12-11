import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) getAllDoctors();
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4 text-neutral-800">All Doctors</h1>

      <div className="w-full flex flex-wrap gap-6">
        {doctors.map((item, index) => (
          <div
            className="w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] bg-white border border-gray-200 rounded-2xl overflow-hidden 
                       shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
            key={index}
          >
            <div className="h-44 w-full overflow-hidden bg-indigo-50">
              <img
  src={item.image}
  alt={item.name}
  className="w-full h-full object-cover object-top"
/>

            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-neutral-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-zinc-600 text-sm mt-1">{item.speciality}</p>
                </div>

                <div className="flex flex-col items-end">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full text-white ${
                      item.available ? "bg-green-600" : "bg-gray-400"
                    }`}
                  >
                    {item.available ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={item.available}
                    onChange={() => changeAvailability(item._id)}
                    className="w-4 h-4 rounded border-gray-300 accent-primary"
                  />
                  <span className="text-sm text-zinc-700">Toggle availability</span>
                </label>

                <button
                  onClick={() => {
                    // keep as simple button for admin actions (no logic change here)
                    // you can wire more admin actions later
                  }}
                  className="text-sm text-primary px-3 py-1 rounded-lg hover:bg-primary/10 transition"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
