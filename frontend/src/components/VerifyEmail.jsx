import React, { useState } from "react";
import SignInImage from "../assets/SignIn-image.png";
import { FaGoogle } from "react-icons/fa";

const VerfiyNewAccount = () => {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  // Code Validation (Only Numbers & Exactly 6 Digits)
  const validateCode = (e) => {
    const value = e.target.value;
    // Allow only numbers (no letters, no special characters)
    if (!/^[0-9]*$/.test(value)) return;
    
    setCode(value);
    
    if (value.length !== 6) {
      setCodeError("Code must be exactly 6 digits");
    } else {
      setCodeError("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen pt-16">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center bg-white text-black p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-serif mb-4">Tour Guide</h1>
        <div className="rounded-lg w-full max-w-md">
          <div className="border-2 border-black p-6 sm:p-8 w-full bg-[#F9FFFE]">
            <p className="text-2xl sm:text-3xl font-semibold text-center mb-6">Enter confirmation code</p>

            {/* Code Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your code"
                className="w-full p-3 rounded bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none"
                value={code}
                onChange={validateCode}
                maxLength={6} // Restrict input length to 6 digits
              />
              {codeError && <p className="text-red-500 text-sm">{codeError}</p>}
            </div>

            {/* Verify Button */}
            <button className="w-full bg-[#141415] text-white py-3 rounded mb-4 hover:opacity-90">
              Verify
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
            Already have an account ? 
            <span className="text-red-500 cursor-pointer"> Log in </span>
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

export default VerfiyNewAccount;
