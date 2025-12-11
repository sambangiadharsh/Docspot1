import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success("Profile updated");
        loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else toast.error(data.message);
    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (!userData) return null;

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">

      {/* Animated Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

        {/* SECTION: Avatar + Name */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">

          {/* Avatar */}
          {isEdit ? (
            <label className="cursor-pointer group relative">
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                className="w-32 h-32 rounded-xl object-cover shadow-md transition-all duration-300 group-hover:brightness-75"
                alt=""
              />
              <div className="absolute inset-0 rounded-xl bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                Change
              </div>
              <input
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          ) : (
            <img
              src={userData.image}
              className="w-32 h-32 rounded-xl object-cover shadow-md transition-all duration-300 hover:brightness-95"
              alt=""
            />
          )}

          {/* Name */}
          <div className="flex-1">
            {isEdit ? (
              <input
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="text-2xl font-semibold border-b border-gray-300 focus:border-primary pb-1 outline-none transition-all"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-900">
                {userData.name}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-10" />

        {/* SECTION: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-gray-800 font-semibold text-lg">Contact Information</h3>

          {/* EMAIL */}
          <CardRow label="Email" value={userData.email} />

          {/* PHONE */}
          <CardRow
            label="Phone"
            isEdit={isEdit}
            value={userData.phone}
            onChange={(v) => setUserData((p) => ({ ...p, phone: v }))}
          />

          {/* ADDRESS */}
          <div className="flex justify-between items-start">
            <span className="text-gray-500">Address</span>
            {isEdit ? (
              <div className="flex flex-col items-end gap-3">
                <Input value={userData.address.line1} onChange={(v) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: v },
                  }))
                } />
                <Input value={userData.address.line2} onChange={(v) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: v },
                  }))
                } />
              </div>
            ) : (
              <p className="text-gray-700 text-right leading-tight">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-10" />

        {/* SECTION: Basic Details */}
        <div className="space-y-6">
          <h3 className="text-gray-800 font-semibold text-lg">Basic Details</h3>

          {/* Gender */}
          <CardRow
            label="Gender"
            isEdit={isEdit}
            value={userData.gender}
            type="select"
            onChange={(v) => setUserData((p) => ({ ...p, gender: v }))}
          />

          {/* DOB */}
          <CardRow
            label="Birthdate"
            isEdit={isEdit}
            type="date"
            value={userData.dob}
            onChange={(v) => setUserData((p) => ({ ...p, dob: v }))}
          />
        </div>

        {/* Save / Edit Button */}
        <div className="mt-12 flex justify-center">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-8 py-2 bg-primary text-white rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-8 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white shadow-sm hover:shadow-md transition-all"
            >
              Edit Profile
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

/* ----------------------------------------------
   Small Modern Reusable Components
---------------------------------------------- */

const Input = ({ value, onChange }) => (
  <input
    className="border border-gray-300 rounded-lg px-3 py-1 text-sm w-56 focus:border-primary outline-none transition-all"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

const CardRow = ({ label, value, isEdit, type = "text", onChange }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500">{label}</span>

    {isEdit ? (
      type === "select" ? (
        <select
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:border-primary outline-none transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      ) : type === "date" ? (
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:border-primary outline-none transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm w-40 focus:border-primary outline-none transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    ) : (
      <span className="text-gray-900 font-medium">{value}</span>
    )}
  </div>
);

export default MyProfile;
