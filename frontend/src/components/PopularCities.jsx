import React from 'react';

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Dubai', 'Rome'];

const PopularCities = ({ selectedCity, onCitySelect }) => {
    return (
        <div className="mt-10">
            {/* Responsive Title & Subtitle */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B38] text-center mb-3 font-serif">
                Explore Popular Cities
            </h2>
            <p className="text-sm md:text-base text-center text-[#1C2B38] mb-6 font-serif">
                Discover the most popular travel destinations around the world with us. <br/> 
                Experience the beauty of iconic global landmarks.
            </p>

            {/* Buttons with Equal Width */}
            <div className="flex justify-center flex-wrap gap-4">
                {cities.map((city) => (
                    <button 
                        key={city} 
                        onClick={() => onCitySelect(city)}
                        className={`w-[140px] md:w-[160px] py-2 rounded-[30px] border-2 text-center transition duration-300
                            ${selectedCity === city 
                                ? 'bg-[#7BBCB0] text-white border-[#7BBCB0]' 
                                : 'bg-white text-[#1C2B38] border-[#7BBCB0]'
                            } 
                            hover:bg-[#7BBCB0] hover:text-white`}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PopularCities;