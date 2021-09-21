import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform, Fade } from "react-animation-components";

const Hero = () => {
  return (
    <>
      <header>
        <div className="container hero">
          <div className="row hero_text_area">
            <div className="col hero_text">
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(-500%)",
                }}
                delay="300"
                duration="1000"
              >
                <h1 className="text_gradient">School Stats</h1>
              </FadeTransform>
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateX(-2000%)",
                }}
                delay="300"
                duration="1600"
              >
                <p>
                  Ready to find out how students life conditions impact their
                  school performance?
                </p>
                <Fade in delay="800" duration="1000" className="mt-5">
                  <Link className="cta" to="/statslist">
                    Check Our Stats
                  </Link>
                </Fade>
              </FadeTransform>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
