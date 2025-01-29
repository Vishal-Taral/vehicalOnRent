import React from "react";
import { NavLink } from "react-router-dom";
import carImage from '../assets/car-image.jpg';
import bikeImage from '../assets/bike-image.jpg'

const Category = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Choose Your Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-4xl">
        {/* Category 1 */}
        <NavLink
          to="cars"
          className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative">
            <img
              src={carImage}
              alt="Cars"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Cars</h2>
            <p className="text-gray-600 mt-2">
              Explore a wide range of cars for rent at affordable prices.
            </p>
          </div>
        </NavLink>

        {/* Category 2 */}
        <NavLink
          to="bikes"
          className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative">
            <img
              src={bikeImage}
              alt="Bikes"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Bikes</h2>
            <p className="text-gray-600 mt-2">
              Discover our selection of bikes for convenient and fast travel.
            </p>
          </div>
        </NavLink>
      </div>

      {/* <div className="mt-8 w-full">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Category;
