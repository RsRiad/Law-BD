import React, { useEffect, useState } from "react";
import { getFromBook, removeFromBook } from "../Storage/LocalStorage";
import { Link } from "react-router";
import Button from "../Button/Button";
//import LawyerDet from "./LawyerDet";
import AppointmentChart from "./AppointmentChart"; 

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(getFromBook());
  }, []);

  const handleCancel = (id) => {
    const updated = removeFromBook(id);
    setAppointments(updated);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {appointments.length > 0 ? (
        <>
          {/* Optional chart */}
          <AppointmentChart data={appointments} />

          {/* Lawyer details (showing only the first as sample) */}
          <div className="max-w-4xl mx-auto    mt-10 mb-10">
            <h1 className="text-center text-lg md:text-xl font-bold mb-4">
              Book an Appointment
            </h1>
            <p className="text-sm text-center text-gray-600 ">
              Our platform connects you with verified, experienced lawyers
              across various specialties — all at your convenience.
            </p>
            <hr className="my-2 w-full border-t-1 border-dashed border-gray-400 mx-auto" />
          </div>

          {/* List of appointments */}
          {appointments.map((item) => (
            <div
              key={item.id}
              className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mt-10 mb-6 transition duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                {item.name}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                <p className="text-sm sm:text-base text-gray-600">
                  License No: {item.licenseNumber}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  Fee: Taka {item.consultationFee} (incl. VAT)
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleCancel(item.id)}
                  className="md:w-full cursor-pointer px-4 py-2 rounded-full border border-red-400 text-red-500 hover:bg-red-50 transition"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center mt-5">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6">
            No appointments found
          </h2>
          <Link to="/">
            <Button label="Go back to Home" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
