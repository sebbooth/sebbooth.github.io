import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

import "./About.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  let canvasStyle = { width: "100vw", height: "80vh" };

  const [isSceneLoading, setIsSceneLoading] = useState(true);

  const handleSceneLoad = () => {
    setIsSceneLoading(false);
  };

  return (
    <>
      <div id="About" className="about-canvas-container">
        {isSceneLoading && <p>Loading...</p>}
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://prod.spline.design/D5-XcPCHqJB7IpSR/scene.splinecode"
            style={canvasStyle}
            onLoad={handleSceneLoad}
          />
        </Suspense>
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
