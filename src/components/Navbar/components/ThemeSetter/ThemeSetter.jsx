import "./ThemeSetter.scss";

import { useState } from "react";

const ThemeSetter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        className="toggle-button"
        onClick={toggleTheme}
      >
        {isDarkMode ? <h2>Dark</h2> : <h2>Light</h2>}
      </button>
    </div>
  );
};

export default ThemeSetter;
