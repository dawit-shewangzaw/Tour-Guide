import React, { useState } from "react";
import Rectangle1 from "../assets/download.jpg";
import Rectangle2 from "../assets/Rectangle-2.png";
import Rectangle3 from "../assets/Rectangle-3.png";
import Rectangle4 from "../assets/Rectangle-4.png";
import Rectangle5 from "../assets/Rectangle-5.png";
import Rectangle6 from "../assets/Rectangle-6.png";
import Rectangle7 from "../assets/Rectangle-7.png";
import Rectangle8 from "../assets/Rectangle-8.png";
import Rectangle9 from "../assets/Rectangle-9.png";
import Rectangle10 from "../assets/Rectangle-10.png";
import Rectangle11 from "../assets/Rectangle-11.png";
import Rectangle12 from "../assets/Rectangle-12.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const galleryImages = [
  Rectangle1, Rectangle2, Rectangle3, Rectangle4,
  Rectangle5, Rectangle6, Rectangle7, Rectangle8
];

const videoData = [
  { img: Rectangle9, url: "https://www.youtube.com/watch?v=video1", title: "Explore Stunning Destinations" },
  { img: Rectangle10, url: "https://www.youtube.com/watch?v=video2", title: "Top Travel Tips & Hacks" },
  { img: Rectangle11, url: "https://www.youtube.com/watch?v=video3", title: "Hidden Gems You Must Visit" },
  { img: Rectangle12, url: "https://www.youtube.com/watch?v=video4", title: "Ultimate Travel Guides" },
];

const Stories = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const index = galleryImages.indexOf(selectedImage);
      setSelectedImage(index > 0 ? galleryImages[index - 1] : galleryImages[galleryImages.length - 1]);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const index = galleryImages.indexOf(selectedImage);
      setSelectedImage(index < galleryImages.length - 1 ? galleryImages[index + 1] : galleryImages[0]);
    }
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12 font-serif">
      {/* From the Gallery */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1C2B38] ">From the Gallery</h2>
        <p className="text-lg text-[#1C2B38] mt-2">Explore our curated gallery of captivating images, offering a glimpse into the <br /> beauty and wonder that awaits you on your next adventure.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-6xl">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <button className="absolute top-5 right-5 text-white text-2xl" onClick={() => setSelectedImage(null)}>×</button>
          <button className="absolute left-5 text-white text-2xl" onClick={handlePrev}><FaArrowLeft /></button>
          <img src={selectedImage} alt="Enlarged view" className="max-w-2xl max-h-[80vh] object-contain" />
          <button className="absolute right-5 text-white text-2xl" onClick={handleNext}><FaArrowRight /></button>
        </div>
      )}

      {/* Latest Stories */}
      <div className="text-center mt-16 mb-10">
        <h2 className="text-3xl font-bold text-[#1C2B38] ">Latest Stories</h2>
        <p className="text-lg text-[#1C2B38] mt-2">Discover the most recent tales from our travelers, sharing their unique experiences <br /> and expert insights for your journeys.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto max-w-6xl">
        {videoData.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img src={video.img} alt={video.title} className="w-full h-40 object-cover rounded-lg" />
            <p className="text-center text-lg mt-2 font-semibold">{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Stories;
//Comment 
// 1. The images when we hover on them they must show the details of the image.