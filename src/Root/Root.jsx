import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Toaster position="top-right" />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
