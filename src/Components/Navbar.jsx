import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div>
      <div className="navbar p-0 ">
        <div className="navbar p-0 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer mr-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-indigo-600" : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-blue-600" : ""
                    }
                    to="/booking"
                  >
                    My-Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-blue-600" : ""
                    }
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-blue-600" : ""
                    }
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              to="/"
              className="flex items-center text-xl font-bold gap-2 "
            >
              <img src={logo} alt="logo" className="h-6 w-6" />
              Law.BD
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-600" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-600" : ""
                  }
                  to="/booking"
                >
                  My-Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-600" : ""
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-600" : ""
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Button label={"Contact Now"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
