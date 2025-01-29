import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import VehicalCard from "../components/VehicalCard";
import Error from "../components/Error";
import VehicalDetailPopup from "../components/vehicalDetailPopup";
import {carsData} from '../api/mockData';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  console.log(selectedCar);

  const fetchCars = async () => {
    try {
      // setIsLoading(true);
      // const response = await axios.get("http://localhost:5000/cars");
      setCars(carsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    // Disable scrolling when popup is open
    if (selectedCar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore scrolling when popup is closed
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCar]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error errorMsg={error} retryApiCall={fetchCars} />
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <Filter />
      </div>

      {/* Cards Section */}
      <div className="flex-1 overflow-auto p-6 bg-gray-50 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div key={index}>
              <VehicalCard
                vehicalData={car}
                openPopup={() => setSelectedCar(car)} // Open popup on vehicle click
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup for vehicle details */}
      {selectedCar && (
        <VehicalDetailPopup
          vehicalData={selectedCar}
          onClose={() => setSelectedCar(null)} // Close popup
        />
      )}
    </div>
  );
};

export default Cars;
