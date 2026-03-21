import React from "react";
import { useTheme } from "./ThemeContext";

const Content = () => {
  // Grab exactly what we need from our custom hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`card ${theme}`}>
      <p>
        The current theme is <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Content;
