import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <header>
        <div className="container hero">
          <div className="row hero_text_area">
            <div className="col hero_text">
              <h1>School Stats</h1>
              <p>
                Ready to find out how students life's conditions impact their
                school performance?
              </p>
              <Link className="cta" to="/">
                Check Our Stats
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;