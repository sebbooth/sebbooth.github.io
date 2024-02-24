import React from "react";
import { ThemeSetter } from "./components";
import Spline from "@splinetool/react-spline";
import "./Navbar.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="navbar-container">
        <div className="text-logo">
          <Spline scene="https://prod.spline.design/TNNbfq8p93TmQNrL/scene.splinecode" />
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
