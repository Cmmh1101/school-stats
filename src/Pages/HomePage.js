import React from "react";
import InternetChart from "../components/internetchart/InternetChart";
import Hero from "../components/hero/Hero";
import HealthChart from "../components/healthchart/HealthChart";
import TravelTimeChart from "../components/traveltime/TravelTime";
import StastList from "../components/statsOptions/StatsList";

const Home = () => {
  return (
    <>
      <Hero />

      <StastList />
    </>
  );
};

export default Home;
