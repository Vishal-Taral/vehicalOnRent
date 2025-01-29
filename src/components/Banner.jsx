import React from "react";
import bannerImage from "../assets/bannerImage.jpg";
import styles from "../styles/Banner.module.scss";
import SeachForm1 from "./SearchForm1";
import { NavLink } from "react-router-dom";
import Category from "../pages/Category";

const Banner = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="relative bg-cover bg-center h-screen w-full">
        <div className={`absolute inset-0 ${styles.banner_container}`}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-7xl font-bold mb-2 text-center">Book your vehical</h1>
          <p className="text-3xl mb-6 text-center">
            We are trusted by all India 
          </p>
          {/* <SeachForm1 /> */}

          <NavLink to={'/Category'}>
            <button
              className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 animate-bounce `}
            >
              Book Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
