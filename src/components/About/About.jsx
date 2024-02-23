import React from "react";
import Spline from "@splinetool/react-spline";
import "./About.scss";

const About = () => {
  return (
    <div>
      <Spline
        className="about-canvas"
        scene="https://prod.spline.design/crOoQLVc1ut5yoIk/scene.splinecode"
      />
      <div className="about-container">
        <div className="about-title">
          <span>
            Hi, I'm <br />
          </span>
          Sebastian Booth
        </div>
      </div>
    </div>
  );
};

export default About;
