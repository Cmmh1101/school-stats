import React from "react";
import { Link } from "react-router-dom";

const StatsList = () => {
  return (
    <>
      <section className="options_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 stat_link_box">
              <Link className="link_stats" to="/internetchart">
                <h3>
                  <i className="fa fa-wifi" /> Internet Access
                </h3>
                <div className="imagen_chart">
                  <img src="../../images/internet.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-md-6 stat_link_box">
              <Link className="link_stats" to="/healthchart">
                <h3>
                  <i className="fa fa-user-md" /> Health Conditions
                </h3>
                <div className="imagen_chart">
                  <img src="../../images/health.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-md-6 mx-auto stat_link_box">
              <Link className="link_stats" to="/traveltimechart">
                <h3>
                  <i className="fa fa-car" /> Travel Time
                </h3>
                <div className="imagen_chart">
                  <img src="../../images/traveltime.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-md-6 mx-auto stat_link_box">
              <Link className="link_stats" to="/alltraveltimechart">
                <h3>
                  <i className="fa fa-user-md" /> Health Conditions
                </h3>
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
