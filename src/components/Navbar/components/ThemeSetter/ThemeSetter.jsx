import "./ThemeSetter.scss";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { useContext } from "react";

const ThemeSetter = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        aria-label="Toggle Dark Mode"
        className={isDarkMode ? "toggle dark-button" : "toggle light-button"}
        onClick={toggleDarkMode}
      >
        <p>Light</p>
        <p>Dark</p>
        <div className={isDarkMode ? "toggle-left" : "toggle-right"}>
          <div className="toggle-switch"></div>
        </div>
      </div>
    </>
  );
};

export default ThemeSetter;
