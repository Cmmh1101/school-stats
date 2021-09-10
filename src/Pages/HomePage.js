import React from "react";
import InternetChart from "../components/internetchart/InternetChart";
import Hero from "../components/hero/Hero";
import HealthChart from "../components/healthchart/HealthChart";
import TravelTimeChart from "../components/traveltime/TravelTime";

const Home = () => {
  return (
    <>
      <Hero />
      <InternetChart />
      <HealthChart />
      <TravelTimeChart />
    </>
  );
};

export default Home;
