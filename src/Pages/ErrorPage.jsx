import React from "react";
import { Link, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Button from "../Button/Button";
import img from "../assets/error.jpg";

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col justify-center items-center min-h-[80vh] px-4 bg-gray-100 text-center">
        <img
          src={img}
          alt="Not Found"
          className="max-w-full w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-contain mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mb-6">
          The page at{" "}
          <code className="bg-white px-2 py-1 rounded">
            {location.pathname}
          </code>{" "}
          doesn't exist.
        </p>
        <Link to="/">
          <Button label="Go back to Home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;