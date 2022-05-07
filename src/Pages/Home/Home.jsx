import React from "react";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
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
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
