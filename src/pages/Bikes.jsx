import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import VehicalCard from "../components/VehicalCard";
import Error from "../components/Error";
import VehicalDetailPopup from "../components/vehicalDetailPopup";
import {bikesData} from '../api/mockData';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBike, setSelectedBike] = useState(null); // Track the selected bike

  const fetchBikes = async () => {
    try {
      // setIsLoading(true);
      // const response = await axios.get("http://localhost:5000/bikes");
      setBikes(bikesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  useEffect(() => {
    // Disable scrolling when popup is open
    if (selectedBike) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore scrolling when popup is closed
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBike]);

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
        <Error errorMsg={error} retryApiCall={fetchBikes} />
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <section>
        <Filter />
      </section>

      {/* Cards Section */}
      <div className="flex-1 overflow-auto p-6 bg-gray-50 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <VehicalCard
              key={bike.id}
              vehicalData={bike}
              openPopup={() => setSelectedBike(bike)} // Open popup on bike click
            />
          ))}
        </div>
      </div>

      {/* Popup for bike details */}
      {selectedBike && (
        <VehicalDetailPopup
          vehicalData={selectedBike}
          onClose={() => setSelectedBike(null)} // Close popup
        />
      )}
    </div>
  );
};

export default Bikes;
