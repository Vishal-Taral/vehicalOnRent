import React from "react";

const SearchForm1 = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="flex flex-col items-center text-white">
          <i className="fas fa-motorcycle text-3xl mb-1"></i>
          Rent Bike
        </button>
        <button className="flex flex-col items-center text-white px-4 rounded">
          Rent Car
        </button>
        <button className="flex flex-col items-center text-white">
          <i className="fas fa-bicycle text-3xl mb-1"></i>
          Rent Bicycle
        </button>
        <button className="flex flex-col items-center text-white">
          <i className="fas fa-road text-3xl mb-1"></i>
          Guided Tours
        </button>
      </div>
      <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">City</label>
            <select className="w-full mt-1 px-4 py-2 border rounded text-black">
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">Book at</label>
            <select className="w-full mt-1 px-4 py-2 border rounded text-black">
              <option>Daily</option>
              <option>Hourly</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">Pick Up Date</label>
            <input
              type="date"
              className="w-full mt-1 px-4 py-2 border rounded text-black"
              defaultValue="2025-01-16"
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">Pick Time</label>
            <input
              type="time"
              className="w-full mt-1 px-4 py-2 border rounded text-black"
              defaultValue="15:00"
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">Drop Off Date</label>
            <input
              type="date"
              className="w-full mt-1 px-4 py-2 border rounded text-black"
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700 text-sm">Drop Time</label>
            <input
              type="time"
              className="w-full mt-1 px-4 py-2 border rounded text-black"
              defaultValue="15:00"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Find Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm1;
