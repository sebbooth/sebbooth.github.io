import { useState } from "react";

import Spline from "@splinetool/react-spline";

import "./About.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  let canvasStyle = { width: "100vw", height: "80vh" };

  const [isSceneLoading, setIsSceneLoading] = useState(true);

  const handleSceneLoad = () => {
    setIsSceneLoading(false);
  };

  return (
    <>
      <div id="About" className="about-canvas-container">
        {isSceneLoading && <p>Loading...</p>}
        <Spline
          scene="https://prod.spline.design/D5-XcPCHqJB7IpSR/scene.splinecode"
          style={canvasStyle}
          onLoad={handleSceneLoad}
        />
      </div>

      <div className="about-container">
        <div className="about-links">
          <a href="https://github.com/sebbooth">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sebbooth">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
