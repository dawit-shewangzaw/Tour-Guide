import React, { useState } from "react";
import SignInImage from "../assets/SignIn-image.png";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Email Validation
  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
    } else {
      setEmailError("");
    }
  };

  // Password Validation
  const validatePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen pt-16">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center bg-white text-black p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-serif mb-4">Tour Guide</h1>
        <div className="rounded-lg w-full max-w-md">
          <div className="border-2 border-black p-6 sm:p-8 w-full bg-[#F9FFFE]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Reset Password</h2>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none"
                value={email}
                onChange={validateEmail}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-[#141415] text-white py-3 rounded mb-4 hover:opacity-90">
              Reset
            </button>

            {/* Sign Up with Google */}
            <button className="w-full bg-white text-black font-bold py-3 rounded flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-200">
              <FaGoogle /> Sign in with Google
            </button>

            <p className="text-black text-xs text-center mt-4">
              By signing up, I have read and agree to 
              <span className="text-blue-400 cursor-pointer"> Terms</span> and 
              <span className="text-blue-400 cursor-pointer"> Policy</span>.
            </p>
          </div>

          <p className="text-black text-center mt-2">
            You have no account ? 
            <span className="text-red-500 cursor-pointer"> Create Account </span>
          </p>
        </div>
      </div>

      {/* Right Section (Hidden on Small Screens) */}
      <div className="hidden sm:block w-1/2">
        <img src={SignInImage} alt="Sign In" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ForgotPassword;
