import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Resetpw = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Deklarasikan navigate
  const baseURL = import.meta.env.VITE_REACT_API_URL;

  const validateEmail = (email) => {
    // Regex untuk memvalidasi format email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRequestOTP = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Oops!",
        text: "Email cannot be empty.",
        icon: "error",
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${baseURL}/resend-otp2`, { email });
      if (response.status === 200) {
        Swal.fire({
          title: "OTP Sent!",
          text: "A reset code (OTP) has been sent to your email.",
          icon: "success",
        });
        // Navigate ke halaman verifikasi OTP dengan email sebagai state
        navigate("/VerifyOTP", { state: { email } });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to send OTP. Please try again.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-forgot-password h-screen flex justify-center items-center px-5">
      <div className="content w-full md:w-3/4 lg:w-1/4 flex flex-col items-center">
        <h1 className="text-color-yellow text-4xl m-3">Forgot Password</h1>
        <form onSubmit={handleRequestOTP} className="w-full">
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-hover-button text-black rounded-full h-9 p-5 m-2 w-full"
          />
          <button
            type="submit"
            className="w-full my-4 p-2 bg-yellow-500 hover:bg-color-gold-car text-black py-2 px-4 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Sending OTP..." : "Request OTP"}
          </button>
        </form>
        <a
          href="/login"
          className="absolute hover:text-color-gold-card left-5 bottom-5 text-color-primary text-sm md:text-base"
        >
          Back
        </a>
      </div>
      <img
        src="./img/Login/Polygon1.png"
        alt="Background Shape 1"
        className="absolute w-1/4 md:w-1/5 bottom-0 left-0 -z-10"
      />
      <img
        src="./img/Login/Polygon2.png"
        alt="Background Shape 2"
        className="absolute w-1/4 md:w-1/5 top-0 right-0 -z-10"
      />
      <img
        src="./img/Login/Ellipse.png"
        alt="Background Circle 1"
        className="absolute w-1/6 md:w-1/10 top-[5rem] left-[2rem] md:left-[4rem] -z-10"
      />
      <img
        src="./img/Login/Ellipse.png"
        alt="Background Circle 2"
        className="absolute w-1/6 md:w-1/10 bottom-[2rem] right-[2rem] md:right-[4rem] -z-10"
      />
    </div>
  );
};

export default Resetpw;
