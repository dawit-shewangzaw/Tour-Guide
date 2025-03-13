import React from "react";
import { FaClock, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-[#7BBCB0] rounded-[30px] p-10 text-white text-center my-16 mx-auto w-4/5">
      <h2 className="text-3xl font-bold mb-6">Why Book with Tour Guide</h2>
      
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {/* 24/7 Customer Support */}
        <div className="flex flex-col items-center max-w-xs">
          <FaClock className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
          <p className="text-sm">Our support team is always available to assist you anytime, anywhere.</p>
        </div>
        
        {/* Secure & Reliable */}
        <div className="flex flex-col items-center max-w-xs">
          <FaShieldAlt className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Secure & Reliable</h3>
          <p className="text-sm">We ensure safe and trustworthy booking with verified tour guides and services.</p>
        </div>
        
        {/* Best Travel Experience */}
        <div className="flex flex-col items-center max-w-xs">
          <FaMapMarkedAlt className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Best Travel Experience</h3>
          <p className="text-sm">Explore the world with well-planned itineraries and professional guides.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
