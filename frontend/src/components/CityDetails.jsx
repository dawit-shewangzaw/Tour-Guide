// src/components/CityDetails.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faMountain, faBriefcase, faLandmark } from '@fortawesome/free-solid-svg-icons';
import CityImage from '../assets/City-Image.png';

const cityData = {
    'New York': {
        image: CityImage,
        description: 'Explore the vibrant life of New York City, known for its skyline, art, and culture. From bustling streets to serene parks, the city offers a unique experience for every traveler.',
        categories: [
            { name: 'Public Transportations', icon: faBus },
            { name: 'Nature & Adventure', icon: faMountain },
            { name: 'Business Tours', icon: faBriefcase },
            { name: 'Local Visit', icon: faLandmark }
        ]
    }
};

const CityDetails = ({ selectedCity = 'New York' }) => {
    const city = cityData[selectedCity];

    if (!city) return null;

    return (
        <div className="mt-10">
            {/* Image on Top */}
            <img 
                src={city.image} 
                alt={selectedCity} 
                className="w-full md:w-[80%] mx-auto  shadow-lg object-cover"
            />
            <br />
            {/* Shadow Box for Text Content */}
            <div className="md:w-[80%] mx-auto bg-white rounded-b-2xl shadow-lg p-6 font-serif">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-[60%]">
                        <h2 className="text-5xl font-bold text-[#1C2B38] mb-4">{selectedCity}</h2>
                        <p className="text-[#1C2B38] mb-6 leading-relaxed">{city.description}</p>
                    </div>
                    <div className="md:w-[30%]">
                        <ul className="space-y-4">
                            {city.categories.map((category, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={category.icon} className="text-[#7BBCB0]" />
                                    <span className="text-[#1C2B38]">{category.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityDetails;
