import React from "react";
import CountUp from "react-countup";
const LoadingCard = ({ image, end }) => {
  return (
    <div>
      <div className="bg-white p-4 w-[180px] h-[150px] rounded-lg">
        <div>
          <img className="w-10 h-10" src={image} alt="img" />
        </div>
        <span className="text-4xl font-bold mt-4">
          <CountUp start={0} end={end} duration={3} />+
        </span>
        <p className="text-sm text-gray-600">Total Doctors</p>
      </div>
    </div>
  );
};

export default LoadingCard;
