import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";

const links = require("../../linksdata.json");

const StatsList = () => {
  console.log(links);

  return (
    <>
      <section className="options_bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text_gradient mb-5">Check Our Stats</h1>
            </div>
            {links.map((link, key) => (
              <Fade in className="col-md-6 col-lg-5 mx-auto stat_link_box">
                <Link key={key} className="link_stats" to={link.url}>
                  <h3>
                    <i className={link.icon} /> {link.title}
                  </h3>
                  <div className="imagen_chart">
                    <img src={link.image} alt="" />
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsList;
