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
    return Array(5)
        .fill(0)
        .map((_, i) => (
            <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={`mr-1 ${i < fullStars ? 'text-[#FFA432]' : 'text-white'}`} 
            />
        ));
};

const TopAttractions = () => {
    return (
        <div className="mt-10 mb-10 md:w-[80%] mx-auto px-4 sm:px-0">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {attractions.map((attraction, index) => (
                    <div 
                        key={index} 
                        className="shadow-lg rounded-2xl overflow-hidden bg-white"
                    >
                        <img 
                            src={attraction.image} 
                            alt={`Attraction ${index + 1}`} 
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />

                        {/* Title */}
                        <div className="px-4 pt-2">
                            <h3 className="text-sm md:text-md font-semibold text-[#1C2B38]">
                                New York: Double Decker Bus Tour and Thames
                            </h3>
                        </div>

                        {/* Info List */}
                        <div className="p-4">
                            <ul className="space-y-2">
                                <li className="text-xs md:text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="mr-2 text-[#7BBCB0]" />
                                    Duration: {attraction.duration}
                                </li>
                                <li className="text-xs md:text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faBus} className="mr-2 text-[#7BBCB0]" />
                                    Transport: {attraction.transport}
                                </li>
                                <li className="text-xs md:text-sm text-[#1C2B38] flex items-center">
                                    <FontAwesomeIcon icon={faUsers} className="mr-2 text-[#7BBCB0]" />
                                    Family Plan: {attraction.familyPlan}
                                </li>
                            </ul>
                        </div>

                        {/* Rating and Price */}
                        <div className="flex justify-between items-center px-4 pt-3 pb-4">
                            <div className="flex flex-col items-start">
                                <div className="flex items-center">
                                    {renderStars(attraction.rating)}
                                </div>
                                <span className="text-xs text-gray-500">500 reviews</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-md md:text-lg text-[#7BBCB0] font-semibold">{attraction.price}</span>
                                <span className="text-xs text-gray-500">per person</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopAttractions;