import React from "react";
//import { createBrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Booking from "../Pages/Booking";
import Contact from "../Pages/Contact";
import LawyerDetails from "../Pages/LawyerDetails";
import ErrorPage from "../Pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <p>Loading......</p>,
        loader: () => fetch("LawyerInfo.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "blogs",
        hydrateFallbackElement: <p>Loading......</p>,
        loader: () => fetch("answer.json"),
        Component: Blogs,
      },
      {
        path: "booking",
        Component: Booking,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "/lawyerDetails/:id",
        element: <LawyerDetails></LawyerDetails>,
        hydrateFallbackElement: <p>Loading......</p>,
        loader: () => fetch("LawyerInfo.json"),
      },

    ],
  },
]);
