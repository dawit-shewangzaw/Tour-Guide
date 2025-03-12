// src/components/TopAttractions.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBus, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../assets/Image-1.png';
import Image2 from '../assets/Image-2.png';
import Image3 from '../assets/Image-3.png';
import Image4 from '../assets/Image-4.png';

const attractions = [
    {
        image: Image1,
        duration: '2hr',
        transport: 'Available',
        familyPlan: 'Yes',
        rating: 4.5,
        price: '$120'
    },
    {
        image: Image2,
        duration: '3hr',
        transport: 'Not Available',
        familyPlan: 'No',
        rating: 4.0,
        price: '$90'
    },
    {
        image: Image3,
        duration: '1.5hr',
        transport: 'Available',
        familyPlan: 'Yes',
        rating: 4.8,
        price: '$150'
    },
    {
        image: Image4,
        duration: '2.5hr',
        transport: 'Available',
        familyPlan: 'No',
        rating: 4.2,
        price: '$110'
    }
];

// Function to display stars based on rating
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    // Always display 5 stars, color based on rating
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={`mr-1 ${i < fullStars ? 'text-[#FFA432]' : 'text-white'}`} 
            />
        );
    }

    return stars;
};

const FeatureDestination = () => {
    return (
        <div className="mt-10 md:w-[80%] mx-auto px-4 sm:px-0">
            <div className="mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B38] text-center mb-4 font-serif">
                    Featured Destination
                </h2>
                <p className="text-center text-[#1C2B38] mb-8 font-serif text-sm md:text-base">
                    Discover the most popular travel destinations around the world with us. <br /> 
                    Experience the beauty of iconic global landmarks.
                </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between gap-4">
                {attractions.map((attraction, index) => (
                    <div 
                        key={index} 
                        className="w-full sm:w-[48%] md:w-[23%] shadow-lg rounded-2xl overflow-hidden mb-6"
                    >
                        <img 
                            src={attraction.image} 
                            alt={`Attraction ${index + 1}`} 
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        
                        {/* Title */}
                        <div className="px-4 pt-2">
                            <h3 className="text-md font-semibold text-[#1C2B38]">
                                New York: Double Decker Bus Tour and Thames
                            </h3>
                        </div>

                        <div className="p-4">
                            <ul className="space-y-2">
                                <li className="text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="mr-2 text-[#7BBCB0]" />
                                    Duration: {attraction.duration}
                                </li>
                                <li className="text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faBus} className="mr-2 text-[#7BBCB0]" />
                                    Transport: {attraction.transport}
                                </li>
                                <li className="text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faUsers} className="mr-2 text-[#7BBCB0]" />
                                    Family Plan: {attraction.familyPlan}
                                </li>
                            </ul>
                        </div>

                        {/* Rating and Price on Top */}
                        <div className="flex justify-between items-center px-4 pt-3 pb-4">
                            <div className="flex flex-col items-start">
                                <div className="flex items-center">
                                    {renderStars(attraction.rating)}
                                </div>
                                <span className="text-xs text-gray-500">500 reviews</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg text-[#7BBCB0] font-semibold">{attraction.price}</span>
                                <span className="text-xs text-gray-500">per person</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureDestination;