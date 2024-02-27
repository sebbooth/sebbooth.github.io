import { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { ThemeSetter, NavbarLogo } from "./components";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Navbar.scss";

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar-container">
        <NavbarLogo isDarkMode={isDarkMode} />
        <div className="full-nav">
          <div
            className={
              isDarkMode
                ? "navbar-links dark-links"
                : "navbar-links light-links"
            }
          >
            <a href="#Hero">Home</a>
            <span>/</span>
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
        <div
          className={
            isDarkMode ? "burger-nav dark-burg" : "burger-nav light-burg"
          }
        >
          <Menu right noOverlay>
            <div className={isDarkMode ? "dark-links" : "light-links"}>
              <div className="burg-links">
                <a href="#Hero">/Home</a>
                <a href="#About">/About</a>
                <a href="#Timeline">/Timeline</a>
                <a href="#Projects">/Projects</a>
                <a href="#Contact">/Contact</a>
              </div>
            </div>
            <div className="burg-themesetter">
              <ThemeSetter />
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
