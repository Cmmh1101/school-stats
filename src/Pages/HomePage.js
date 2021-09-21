import React from "react";
import InternetChart from "../components/internetchart/InternetChart";
import Hero from "../components/hero/Hero";
import HealthChart from "../components/healthchart/HealthChart";
import TravelTimeChart from "../components/traveltime/TravelTime";
import AllHealthChart from "../components/healthchart/AllHealthChart";
import FamSchoolSupChart from "../components/famSchoolSup/FamSchoolSup";
import StastList from "../components/statsOptions/StatsList";

const Home = () => {
  return (
    <>
      <Hero />

      <StastList />
      <InternetChart />
      <HealthChart />
      <TravelTimeChart />
      <AllHealthChart />
      <FamSchoolSupChart />
    </>
  );
};

export default Home;
