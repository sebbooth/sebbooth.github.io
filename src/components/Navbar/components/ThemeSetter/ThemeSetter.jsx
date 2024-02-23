import "./ThemeSetter.scss";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { useContext } from "react";

const ThemeSetter = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        className="toggle-button"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <h2>Dark</h2> : <h2>Light</h2>}
      </button>
    </div>
  );
};

export default ThemeSetter;
