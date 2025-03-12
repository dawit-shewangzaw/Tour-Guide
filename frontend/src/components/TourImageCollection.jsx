import React, { useState } from "react";

const TourImageCollection = () => {
  const images = [
    "/assets/TourImageOne.png",
    "/assets/TourImageTwo.png",
    "/assets/TourImageThree.png",
    "/assets/TourImageFour.png",
    "/assets/TourImageFive.png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-[60%] mx-auto">
      {/* Large Main Image */}
      <div className="w-full h-[400px]">
        <img
          src={mainImage}
          alt="Main Tour"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Small Images Below */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Tour ${index + 2}`}
            className="w-full h-[100px] object-cover rounded-md cursor-pointer hover:opacity-80"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default TourImageCollection;
