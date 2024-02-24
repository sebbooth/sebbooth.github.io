import React from "react";
import { ThemeSetter } from "./components";
import "./Navbar.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);

  let logoStyle = { height: "10vh", width: "10vh" };
  return (
    <>
      <div className="navbar-container">
        <div className="text-logo">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              className={isDarkMode ? "logo" : "logo hidden"}
              style={logoStyle}
              scene="https://prod.spline.design/Cohg1pLxDmZFW8qi/scene.splinecode"
            />
            <Spline
              className={isDarkMode ? "logo hidden" : "logo"}
              style={logoStyle}
              scene="https://prod.spline.design/nTLHlilhxM1ub9bt/scene.splinecode"
            />
          </Suspense>
        </div>
        <div
          className={
            isDarkMode ? "navbar-links dark-links" : "navbar-links light-links"
          }
        >
          <a href="#About">About</a>
          <span>/</span>
          <a href="#Timeline">Timeline</a>
          <span>/</span>
          <a href="#Projects">Projects</a>
          <span>/</span>
          <a href="#Contact">Contact</a>
          <span>/</span>
        </div>
        <ThemeSetter />
      </div>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
