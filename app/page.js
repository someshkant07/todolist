"use client";
import LandingPage from "@/component/landing-page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <>
      <LandingPage />
      <ToastContainer />
    </>
  );
};
export default page;
