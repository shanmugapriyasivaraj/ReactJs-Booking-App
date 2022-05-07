import React from "react";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
}

export default Home;
