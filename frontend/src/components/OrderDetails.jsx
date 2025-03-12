import React, { useState , useEffect} from 'react';
import Image1 from '../assets/TourImageOne.png';
import Image2 from '../assets/TourImage2.png';
import Image3 from '../assets/TourImage3.png';
import Image4 from '../assets/TourImage4.png';
import Image5 from '../assets/TourImage5.png';
import Image6 from '../assets/TourImage6.png';
import Image7 from '../assets/TourImage7.png';

const OrderDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  const openImageModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          let { hours, minutes, seconds } = prev;
          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 pt-20 font-serif">
      {/* Left Space (10%) - Hidden on mobile */}
      <div className="hidden lg:block w-1/15"></div>

      {/* Left Side (60% width on desktop, full width on mobile) */}
      <div className="w-full lg:w-3/5 lg:pt-20">
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-left">Vintage Double Decker Bus Tour</h1>

        {/* Image Collection */}
        <div className="mb-8">
          <img
            src={Image1}
            alt="Tour Main"
            className="w-full h-64 lg:h-96 object-cover cursor-pointer"
            onClick={() => openImageModal(0)}
          />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {[Image2, Image3, Image4, Image5, Image6, Image7].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Tour ${index + 2}`}
                className="w-1/4 lg:w-1/4 h-20 lg:h-24 object-cover cursor-pointer"
                onClick={() => openImageModal(index + 1)}
              />
            ))}
          </div>
        </div>

        {/* Core Features Box */}
        <div className="bg-[rgb(243,255,249)] p-4 lg:p-6 border border-[#d4cdcd] rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Free cancellation',
                description: 'Cancel up to 24 hours in advance to receive a full refund',
              },
              {
                title: 'Mobile ticketing',
                description: 'Use your phone or print your voucher',
              },
              {
                title: 'Instant confirmation',
                description: 'Don’t wait for the confirmation!',
              },
              {
                title: 'Health precautions',
                description: 'Special health and safety measures apply. Learn more',
              },
              {
                title: 'Full time security',
                description: 'Check availability to see starting times.',
              },
              {
                title: 'Live tour guide in English',
                description: 'English and Amharic',
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <hr className='text-[#dddddd]' /><br />

        {/* Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Activity</h2>
          <h3 className="text-lg font-semibold mb-4">What we will do</h3>
          <ul className="list-disc list-inside text-gray-700">
            {[
              'Visit Westminster Abbey Visit Westminster Abbey',
              'Explore the Houses of Parliament',
              'Ride a vintage double decker bus',
              'See the London Eye Visit Westminster Abbey',
              'Enjoy historic streets Visit Westminster Abbey',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <hr className='text-[#dddddd]' /><br />

        {/* Included / Not Included */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">What is Included / Not included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Includes</h3>
              <ul className="list-disc list-inside text-gray-700">
                {['Guided tour', 'Transport', 'Entry fees', 'Snacks'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Not Includes</h3>
              <ul className="list-disc list-inside text-gray-700">
                {['Hotel pickup', 'Meals', 'Personal expenses', 'Tips'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className='text-[#dddddd]' /><br />

        {/* Safety */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Safety</h2>
          <h3 className="text-lg font-semibold mb-4">Health precautions</h3>
          <ul className="list-disc list-inside text-gray-700">
            {[
              'Masks required',
              'Social distancing enforced',
              'Hand sanitizer provided',
              'Regular temperature checks',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <hr className='text-[#dddddd]' /><br />

        {/* Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Language</h3>
              <ul className="list-disc list-inside text-gray-700">
                {['English', 'Amharic'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p className="text-gray-700">4 hours</p>
            </div>
            <div>
              <h3 className="font-semibold">Number of People</h3>
              <p className="text-gray-700">Up to 10</p>
            </div>
          </div>
        </div>
        <hr className='text-[#dddddd]' /><br />

        {/* Meeting Point Address */}
        <div>
          <h2 className="text-xl font-bold mb-4">Meeting Point Address</h2>
          <p className="text-gray-700 mb-4">
            Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag.
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Meeting Point Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056382!2d-0.127758684229909!3d51.50735097963448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1633012345678!5m2!1sen!2suk"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right Side (20% width on desktop, full width on mobile) */}
      <div className="w-full lg:w-1/4 lg:ml-8 mt-8 lg:mt-0 lg:pt-40">
      {/* Payment Box */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Booking Detail</h2>
          <hr className='text-[#dddddd]' /><br />
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">From</label>
              <input
                type="date"
                className="w-full p-2 rounded-lg bg-[#f4f4f5] text-gray-500"
                value="2025-03-10"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">To</label>
              <input
                type="date"
                className="w-full p-2 rounded-lg bg-[#f4f4f5] text-gray-500"
                value="2025-03-15"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">No of Guests</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#f4f4f5] text-gray-500"
                value="2"
                readOnly
              />
            </div>
            <div className="pt-1">
              <p className="text-sm text-gray-600 text-center">Subtotal</p>
              <p className="text-2xl font-bold text-[#7BBCB0] text-center">$78</p>
            </div>
            {showCancelPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-4/5 lg:w-3/5 p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4">Our Terms and Policies</h2>
            <p className="text-gray-700 mb-2">
            See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.
            </p>
            <p className="text-gray-700 mb-4">Please read the terms carefully before proceeding.</p>
            
            <h3 className="text-xl font-semibold mb-2">Your Booking Time</h3>
            <h6 className="text-lg  mb-2">Time after Booking</h6>
            <div className="p-4 bg-gray-100 rounded-lg text-lg text-center font-semibold">
              {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
            </div>
            
            <h4 className="text-lg font-semibold mt-4">We will Refund Your Money Beyond Your Booking Time</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Booking Time &lt; 24 = Full Refund</li>
              <li>Booking Time &gt; 24 = 70% Refund</li>
            </ul>
            
            <div className="flex justify-end mt-6">
              <button onClick={() => setShowCancelPopup(false)} className="mr-4 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">Close</button>
              <button className="px-6 py-2 bg-[#7BBCB0] text-white rounded-lg hover:bg-[#6aa89c]">Cancel Booking</button>
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>

      {/* Right Space (10%) - Hidden on mobile */}
      <div className="hidden lg:block w-1/15"></div>

      {/* Image Pop-up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-4/5 h-4/5 flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Tour"
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-1/2 left-4 bg-white p-2 rounded-full shadow-lg transform -translate-y-1/2"
              onClick={showPreviousImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 bg-white p-2 rounded-full shadow-lg transform -translate-y-1/2"
              onClick={showNextImage}
            >
              &gt;
            </button>
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
              onClick={closeImageModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;