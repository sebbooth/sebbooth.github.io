import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SplineCanvas } from "../";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Hero.scss";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  let canvasStyle = { width: "100vw", height: "80vh" };

  return (
    <>
      <div id="Hero" className="hero-canvas-container">
        <SplineCanvas
          attributes={{
            scene:
              "https://prod.spline.design/Zagph5FizS7s7y0Z/scene.splinecode",
            style: { canvasStyle },
          }}
        />
      </div>

      <div className="hero-container">
        <div
          className={
            isDarkMode ? "hero-links dark-icons" : "hero-links light-icons"
          }
        >
          <a href="https://github.com/sebbooth" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sebbooth" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
