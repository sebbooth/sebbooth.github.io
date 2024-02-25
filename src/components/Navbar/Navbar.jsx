import { useContext } from "react";
import { ThemeSetter, NavbarLogo } from "./components";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Navbar.scss";

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar-container">
        <NavbarLogo isDarkMode={isDarkMode} />
        <div
          className={
            isDarkMode ? "navbar-links dark-links" : "navbar-links light-links"
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
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
