import React from "react";
import AppBgImage from "../assets/App-Bg-Image.png";
import MaskGroup1 from "../assets/Mask-Group-1.png";
import MaskGroup2 from "../assets/Mask-Group-2.png";

const Advertisement = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center py-16 px-6 sm:px-8 md:px-16 font-serif min-h-[500px]"
      style={{
        background: "linear-gradient(to right, #48057D 50%, #2ADDE7 100%)",
      }}
    >
      {/* Background Image */}
      <img
        src={AppBgImage}
        alt="App Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left - App Images */}

        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
             <img
               src={MaskGroup2}
               alt="App Screenshot 1"
               className="w-48 md:w-56 lg:w-78 relative z-10"
             />
             <img
               src={MaskGroup1}
               alt="App Screenshot 2"
               className="w-32 md:w-40 lg:w-78 absolute top-10 left-10 md:top-12 md:left-36 z-0"
             />
           </div>

         {/* <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
           <img
             src={MaskGroup2}
             alt="App Screenshot 1"
             className="w-40 sm:w-48 md:w-56 lg:w-64 relative z-10"
           />
           <img
             src={MaskGroup1}
             alt="App Screenshot 2"
             className="w-28 sm:w-32 md:w-40 lg:w-48 absolute top-8 sm:top-10 left-8 sm:left-12 md:top-12 md:left-36 z-0"
           />
         </div> */}

        {/* Right - Text and Button */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tour Guide Mobile App</h2>
          <p className="text-sm sm:text-base md:text-lg mt-2">Available for both iOS & Android</p>
          <p className="mt-3 text-xs sm:text-sm md:text-base max-w-md mx-auto md:mx-0">
            Here is our app which works perfectly like this website. It’s designed
            for users who are more comfortable with applications than websites.
            You can use either based on your choice.
          </p>
          <button
            className="mt-6 bg-[#FFDA32] text-black font-bold shadow-lg hover:bg-yellow-400 transition mx-auto md:mx-0"
            style={{ width: "260px", height: "60px", borderRadius: "30px" }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;