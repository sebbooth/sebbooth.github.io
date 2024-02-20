import React from "react";
import { ThemeSetter } from "./components";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>SB</h1>
      <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Timeline">Timeline</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <ThemeSetter />
    </div>
  );
};

export default Navbar;
