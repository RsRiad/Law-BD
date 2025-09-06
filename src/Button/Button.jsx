import React from "react";

const Button = ({ onClick, label, w, disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`btn rounded-full ${w} ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Disabled state
            : "bg-blue-600 text-white  cursor-pointer" // Enabled state
        }`}
        disabled={disabled} // Ensure button is disabled
      >
        {label}
      </button>
    </div>
  );
};

export default Button;