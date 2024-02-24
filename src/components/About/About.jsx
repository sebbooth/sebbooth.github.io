import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SplineCanvas } from "../";

import "./About.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  let canvasStyle = { width: "100vw", height: "80vh" };

  return (
    <>
      <div id="About" className="about-canvas-container">
        <SplineCanvas
          attributes={{
            scene:
              "https://prod.spline.design/D5-XcPCHqJB7IpSR/scene.splinecode",
            style: { canvasStyle },
          }}
        />
      </div>

      <div className="about-container">
        <div
          className={
            isDarkMode ? "about-links dark-icons" : "about-links light-icons"
          }
        >
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
