import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer footer-horizontal footer-center bg-white
     p-10"
      >
        <aside>
          <NavLink
            to="/"
            className="flex items-center text-xl font-bold gap-2 "
          >
            <img src={logo} alt="logo" className="h-6 w-6" />
            Law.BD
          </NavLink>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
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
                    isActive ? "border-b-2 border-indigo-600" : ""
                  }
                  to="/booking"
                >
                  My-Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-indigo-600" : ""
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-indigo-600" : ""
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <hr className="my-2 w-full max-w-screen-md border-t border-gray-300 mx-auto" />
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[20px] md:text-[30px]">
                <FaGithub />
              </span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[20px] md:text-[30px]">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[20px] md:text-[30px]">
                <SiCodeforces />
              </span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[20px] md:text-[30px]">
                <SiCodechef />
              </span>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
