import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBox = () => {
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState("");
    const [startDate, setStartDate] = useState(null);

    const handleLocationChange = (e) => setLocation(e.target.value);
    
    // Ensure guests cannot go below 1
    const handleGuestsChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setGuests(value);
    };

    return (
        <div className="w-[70%] mx-auto mt-10 p-4 bg-white shadow-lg rounded-2xl flex flex-wrap md:flex-nowrap justify-between items-center space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/3">
                <label className="text-[#7BBCB0] text-sm flex items-center space-x-1 mb-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#7BBCB0]" />
                    <span>Location</span>
                </label>
                <div className="flex items-center space-x-2">
                    <input 
                        type="text"
                        placeholder="Search for a destination"
                        value={location}
                        onChange={handleLocationChange}
                        className="w-full p-2 outline-none border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <label className="text-[#7BBCB0] text-sm flex items-center space-x-1 mb-1">
                    <FontAwesomeIcon icon={faUsers} className="text-[#7BBCB0]" />
                    <span>Guests</span>
                </label>
                <div className="flex items-center space-x-2">
                    <input 
                        type="number"
                        min="1"
                        placeholder="How many guests?"
                        value={guests}
                        onChange={handleGuestsChange}
                        className="w-full p-2 outline-none border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <label className="text-[#7BBCB0] text-sm flex items-center space-x-1 mb-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#7BBCB0]" />
                    <span>Date</span>
                </label>
                <div className="flex items-center space-x-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        placeholderText="Pick date"
                        className="w-full p-2 outline-none border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <button className="w-full md:w-auto bg-[#FFDA32] text-black font-bold py-2 px-5 rounded-[30px] hover:bg-[#ff8686] transition duration-300">
                Search
            </button>
        </div>
    );
};

export default SearchBox;