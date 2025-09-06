import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Button from "../Button/Button";
import { addToBook } from "../Storage/LocalStorage";

const LawyerDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log("data :>> ", data);
  const lawyer = data.find((lawyer) => lawyer.id === parseInt(id));
  if (!lawyer) return <p className="text-center mt-20">Lawyer not found</p>;

  const {
    name,
    image,
    speciality,
    experience,
    licenseNumber,
    consultationFee,
    availability,
  } = lawyer;

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isAvailableToday = availability?.includes(today);

  const handleBooked = () => {
    //console.log(lawyer);
    addToBook(lawyer);

    navigate("/booking");
  };

  return (
    <div>
      {/* Top Heading Section */}
      <div className="bg-gray-100 rounded-xl px-6 py-8 mt-6 text-center max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Lawyer’s Profile Details
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {name} is a practicing lawyer specializing in {speciality}, with over{" "}
          {experience} of experience. Registered under license number{" "}
          {licenseNumber}, Lawyer {name?.split(" ").slice(-1)[0]} is available
          for consultations on {availability?.join(", ") || "no specified days"}
          . The consultation fee is Taka {consultationFee} (incl. VAT).
        </p>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white shadow-md rounded-xl max-w-5xl mx-auto p-6 mt-6 flex flex-col md:flex-row gap-6 items-center">
        <img src={image} className="w-48 h-56 bg-gray-200 rounded-lg" />
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">
            {experience}
          </span>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-700 mt-1">{speciality}</p>
          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <span>License No:</span> {licenseNumber}
          </p>
          <div className="mt-3">
            <p className="font-medium text-gray-700 mb-1">Availability</p>
            <div className="flex flex-wrap gap-2">
              {availability?.map((day, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-green-600 font-bold">
            Consultation Fee:{" "}
            <span className="text-green-700">Taka : {consultationFee}</span>
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white shadow-md rounded-xl max-w-4xl mx-auto p-6 mt-6 mb-10">
        <h2 className="text-center font-semibold text-lg md:text-xl mb-4">
          Book an Appointment
        </h2>
        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Availability</h3>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              isAvailableToday
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {isAvailableToday
              ? "Lawyer Available Today"
              : "Lawyer Unavailable Today"}
          </span>
        </div>

        <div className="bg-orange-100 text-orange-800 text-xs p-2 rounded mb-4 flex items-center gap-2">
          ⚠️ Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </div>

        <span className="flex justify-center">
          <Button
            onClick={handleBooked}
            label="Book Appointment Now"
            disabled={!isAvailableToday}
            className={`${
              isAvailableToday
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } w-full md:w-auto px-6 py-3 rounded-full font-semibold`}
          />
        </span>
      </div>
    </div>
  );
};

export default LawyerDetails;




















