import React, { useState } from "react";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { carDetails } from "../api/mockData";
import Features from "../components/Features";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <section>
        <Banner />
      </section>

      {/* <section className={styles.search}>
        <SearchForm />
      </section> */}

      <section>
        <Features />
      </section>
      <hr />

      <section className="my-5">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center pb-6 mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text italic">
            Top Rental Vehicle
          </h1>
        </div>

        <Card cardData={carDetails} />
      </section>
    </div>
  );
};

export default Home;
