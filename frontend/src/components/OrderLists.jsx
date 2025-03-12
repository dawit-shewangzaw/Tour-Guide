import React, { useState } from "react";
import ListImageOne from "../assets/ListImageOne.png";
import ListImageTwo from "../assets/ListImageTwo.png";
import ListImageThree from "../assets/ListImageThree.png";

const OrderLists = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    setToDate(""); // Reset 'To' date when 'From' changes
  };

  const tours = [
    {
      id: 1,
      image: ListImageOne,
      name: "Beautiful Beachside",
      time: "3-5 hours",
      price: "$100",
    },
    {
      id: 2,
      image: ListImageTwo,
      name: "Mountain Adventure",
      time: "1-2 days",
      price: "$250",
    },
    {
      id: 3,
      image: ListImageThree,
      name: "City Night Tour",
      time: "5-7 hours",
      price: "$80",
    },
    {
      id: 4,
      image: ListImageThree,
      name: "City Night Tour",
      time: "5-7 hours",
      price: "$80",
    },
    {
      id: 5,
      image: ListImageThree,
      name: "City Night Tour",
      time: "5-7 hours",
      price: "$80",
    },
    {
      id: 6,
      image: ListImageThree,
      name: "City Night Tour",
      time: "5-7 hours",
      price: "$80",
    }
  ];

  return (
    <div className="px-4 md:px-24 py-10 pt-20">
      {/* Search Result Box */}
      <div className="shadow-lg p-4 rounded-lg mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Your Active Orders</h2>
          <p className="text-gray-600">Here Are Active Orders</p>
        </div>
        <div className="mt-4 md:mt-0">
          <label className="text-gray-600 mr-2">Sorted by :</label>
          <select className="border py-2 px-4 md:px-20 rounded bg-[#F4F4F5] border-gray-300">
            <option>Money</option>
            <option>Date</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Filters */}
        <div className="w-full md:w-1/4 space-y-4">
          {/* Availability */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Lists</h3> <hr className="border-gray-300" />
            <label className="block mt-2">From</label>
            <input
              type="date"
              className="w-full p-2 border rounded bg-[#f4f4f5]"
              min={new Date().toISOString().split("T")[0]}
              value={fromDate}
              onChange={handleFromDateChange}
            />
            <label className="block mt-2">To</label>
            <input
              type="date"
              className="w-full p-2 border rounded bg-[#f4f4f5]"
              min={fromDate || new Date().toISOString().split("T")[0]}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <button className="w-full mt-4 bg-[#7BBCB0] text-white p-2 rounded">Check Lists</button>
          </div>

          {/* Cost */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-2">Cost</h3>  <hr className="border-gray-300" />
            {[
              "35$ - 50$",
              "50$ - 100$",
              "100$ - 200$",
              "200$ - 500$",
              "500$ - 1000$",
              "More than 1000$",
            ].map((cost, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input type="checkbox" />
                <label>{cost}</label>
              </div>
            ))}
          </div>

          {/* Duration */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Duration</h3> <hr className="border-gray-300" />
            {[
              "0 - 3 hours",
              "3 - 5 hours",
              "5 - 7 hours",
              "1 - 2 days",
              "3 - 6 days",
              "More than 7 days",
            ].map((duration, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input type="checkbox" />
                <label>{duration}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Tour List */}
        <div className="w-full md:w-3/4 space-y-4">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white shadow-lg p-4 rounded-lg flex flex-col md:flex-row items-center gap-4">
              <img src={tour.image} alt={tour.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-sm text-gray-600">⏳ {tour.time} | 🚗 Transport | 👨‍👩‍👧 Family Plan</p>
              </div>
              <div className="text-center md:text-right">
                
              <button className="w-full mt-4 bg-[#7BBCB0] text-white p-2 pr-8 pl-8 rounded">Details</button>

                {/* <p className="text-[#7BBCB0] text-lg font-bold">{tour.price}</p>
                <p className="text-sm text-gray-500">per person</p> */}
              </div>
            </div>
          ))}
          {/* Load More Button */}
          <button className="w-full md:w-3/4 mx-auto block mt-6 border-2 border-[#7BBCB0] text-[#7BBCB0] hover:bg-[#e2ebe9] p-2 rounded-full text-center">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default OrderLists;