import React from "react";
import { ThemeSetter } from "./components";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <h1 className="text-logo">SB</h1>
        <ul className="navbar-links">
          <li className="navbar-link">
            <a href="#About">About</a>
          </li>
          <li className="navbar-link">
            <a href="#Timeline">Timeline</a>
          </li>
          <li className="navbar-link">
            <a href="#Projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <ThemeSetter />
      </div>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
