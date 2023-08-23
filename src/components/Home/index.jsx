import React from "react";

import Header from "../Header/";
import Banner from "./Banner/";
import ScrollButton from "../Footer/ScrollButton";

import "./Home.scss";
import PriceEnter from "./PriceEnter";
import Products from "../Products";
import PromoutionBar from "./PromoutionBar";

const Home = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <Banner />
      <PriceEnter />
      <Products />
      <PromoutionBar />
      <ScrollButton />
    </div>
  );
};

export default Home;
