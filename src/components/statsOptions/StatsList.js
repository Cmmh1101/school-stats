import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import InternetChart from "../internetchart/InternetChart";
import HealthChart from "../healthchart/HealthChart";
import TravelTimeChart from "../traveltime/TravelTime";

const StatsList = () => {
  return (
    <>
      <section className="options_bg">
        <div className="container">
          <div className="row">
            <div className="col-6 stat_link_box">
              <Link className="link_stats" to="/internetchart">
                <h3>Internet Access</h3>
                <div className="imagen_chart">
                  <img src="../../images/internet.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-6 stat_link_box">
              <Link className="link_stats" to="/healthchart">
                <h3>Health Conditions</h3>
                <div className="imagen_chart">
                  <img src="../../images/health.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-6 mx-auto stat_link_box">
              <Link className="link_stats" to="/traveltimechart">
                <h3>Travel Time</h3>
                <div className="imagen_chart">
                  <img src="../../images/traveltime.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-6 mx-auto stat_link_box">
              <Link className="link_stats" to="/traveltimechart">
                <h3>Pending Bonus</h3>
                <div className="imagen_chart">
                  <img src="../../images/health.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsList;
