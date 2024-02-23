import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function MyComponent() {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#222",
  };
  return <div style={styles}> {/* ... content */} </div>;
}
