import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Button } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


const VehicalDetailPopup = ({ vehicalData, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={true} 
        onClose={onClose} 
        className="w-full"
      >
        <div className="bg-white p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-4xl"
          >
            &times;
          </button>

          {/* Vehicle Details */}
          <h2 className="text-2xl font-bold text-gray-800">{vehicalData.name}</h2>
          <p className="text-lg text-gray-600">{vehicalData.version}</p>
          <img
            src={vehicalData.img}
            alt={vehicalData.name}
            className="w-full h-64 object-cover mt-4 rounded-md"
          />

          <div className="flex justify-between px-3">
            <div>
              <p className="mt-4">
                <strong>Price per hour:</strong> $
                {vehicalData.pricePerHour || "N/A"}
              </p>
              <p className="mt-2">
                <strong>Condition:</strong> {vehicalData.condition}
              </p>
              <p className="mt-2">
                <strong>Fuel Type:</strong> {vehicalData.fuelType}
              </p>
            </div>

            <div>
              <p className="mt-2">
                <strong>Mileage:</strong> {vehicalData.mileage}
              </p>
              <p className="mt-2">
                <strong>Color:</strong> {vehicalData.color}
              </p>
              <p className="mt-2">
                <strong>Availability:</strong>{" "}
                {vehicalData.availability ? "Available" : "Not Available"}
              </p>
            </div>
          </div>

          <p className="mt-2 text-gray-600 w-full px-3">
            {vehicalData.description || "No description available."}
          </p>

          <NavLink to={'Payment'}>
            <Button
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Book Now
            </Button>
          </NavLink>

          <Button
            onClick={onClose}
            className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Close
          </Button>
        </div>
      </Drawer>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-2/4 p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-4xl"
        >
          &times;
        </button>

        {/* Vehicle Details */}
        <h2 className="text-2xl font-bold text-gray-800">{vehicalData.name}</h2>
        <p className="text-lg text-gray-600">{vehicalData.version}</p>
        <img
          src={vehicalData.img}
          alt={vehicalData.name}
          className="w-full h-64 object-cover mt-4 rounded-md"
        />

        <div className="flex justify-between px-3">
          <div>
            <p className="mt-4">
              <strong>Price per hour:</strong> $
              {vehicalData.pricePerHour || "N/A"}
            </p>
            <p className="mt-2">
              <strong>Condition:</strong> {vehicalData.condition}
            </p>
            <p className="mt-2">
              <strong>Fuel Type:</strong> {vehicalData.fuelType}
            </p>
          </div>

          <div>
            <p className="mt-2">
              <strong>Mileage:</strong> {vehicalData.mileage}
            </p>
            <p className="mt-2">
              <strong>Color:</strong> {vehicalData.color}
            </p>
            <p className="mt-2">
              <strong>Availability:</strong>{" "}
              {vehicalData.availability ? "Available" : "Not Available"}
            </p>
          </div>
        </div>

        <p className="mt-2 text-gray-600 w-full px-3">
          {vehicalData.description || "No description available."}
        </p>

        {/* Book Now Button */}
        <NavLink to={'payment'}>
          <button
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </button>
        </NavLink>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VehicalDetailPopup;
