import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const getFromBook = () => {
  return JSON.parse(localStorage.getItem("booked")) || [];
};


export const addToBook = (lawyer) => {
  const booked = getFromBook();
  console.log(booked);
  const isExist = booked.find((l) => l.id === lawyer.id);
  if (isExist) {
   return toast.error("Appointment already booked for this lawyer!");
  }

  booked.push(lawyer);
  localStorage.setItem("booked", JSON.stringify(booked));
  toast.success("Appointment booked successfully!");
};


export const removeFromBook = (id) => {
  const booked = getFromBook();
  const updated = booked.filter((l) => l.id !== id);
  localStorage.setItem("booked", JSON.stringify(updated));
  toast.success("Appointment canceled successfully!");
  return updated;
};
