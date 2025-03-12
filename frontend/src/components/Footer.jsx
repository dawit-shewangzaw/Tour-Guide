import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import TeleBirrLogo from "../assets/Tele-Birr.png";

const Footer = () => {
  return (
    <footer className="bg-[#13253F] text-white py-10 px-6 md:px-12 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        {/* Language & Currency */}
        <div>
          <h3 className="font-bold mb-2">Language</h3>
          <select className="w-full p-2 bg-transparent border border-white text-white rounded-md">
            <option className="text-black">English</option>
            <option className="text-black">Amharic</option>
            <option className="text-black">Spanish</option>
          </select>
          <h3 className="font-bold mt-4 mb-2">Currency</h3>
          <select className="w-full p-2 bg-transparent border border-white text-white rounded-md">
            <option className="text-black">Ethiopian Birr</option>
            <option className="text-black">US Dollar</option>
          </select>
        </div>
        {/* Company */}
        <div className="md:ml-auto">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-gray-300">
            <li className="mb-1 hover:text-white cursor-pointer">About Us</li>
            <li className="mb-1 hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Stories</li>
          </ul>
        </div>
        {/* Help */}
        <div className="md:ml-auto">
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="text-gray-300">
            <li className="mb-1 hover:text-white cursor-pointer">Contact Us</li>
            <li className="mb-1 hover:text-white cursor-pointer">Terms and Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policies</li>
          </ul>
        </div>
        {/* Payment Methods */}
        <div className="md:ml-auto">
          <h3 className="font-bold mb-2">Payment Methods</h3>
          <img src={TeleBirrLogo} alt="TeleBirr" className="w-[108px] h-[62px]" />
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-500 mb-2" />
      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-300">Copyright 2021 Tour Guide. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4b69b1] text-white">
            <FaFacebookF size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white">
            <FaTwitter size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white">
            <FaWhatsapp size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;