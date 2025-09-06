import React from "react";
import { BiRegistered } from "react-icons/bi";
import { Link } from "react-router"; 

const LawyerCard = ({ lawyer }) => {
  const {
    id,
    name,
    image,
    speciality,
    experience,
    licenseNumber,
    availability,
    consultationFee
  } = lawyer || {};

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isAvailableToday = availability?.includes(today);

  return (
    <div className="mx-auto p-4 bg-white rounded-2xl shadow-sm">
      <div className="flex justify-center items-center">
        <img
          className="w-[300px] h-[200px] lg:w-[300px] lg:h-[200px] rounded-2xl object-cover"
          src={image || "lawyer."}
          alt="lawyer"
        />
      </div>
      <div className="flex gap-2 mt-4">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            isAvailableToday
              ? "text-green-600 bg-green-100"
              : "text-red-600 bg-red-100"
          }`}
        >
          {isAvailableToday ? "Available" : "Unavailable"}
        </span>

        <span className="text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
          {experience} experience
        </span>
      </div>
      <div className="w-[300px] mt-4">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{speciality}</p>
      </div>
      <hr className="my-2 w-[300px] border-t border-dashed border-gray-300 mx-auto" />
      <div className="text-sm text-gray-600 flex items-center gap-1">
        <BiRegistered />
        <span>License No: {licenseNumber}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Fee: <span className="font-semibold">৳{consultationFee}</span>
      </p>

      <Link to={`/LawyerDetails/${id}`}>
        <button className="mt-4 w-full border border-blue-500 text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-50 transition cursor-pointer">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default LawyerCard;
