import React, { createContext, useState, useContext } from "react";

//creating a context object
const ThemeContext = createContext();

//creating a provider component
//children = everything inside it (your entire app)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
//this is basically a custom hook that minimizes the imports of value
export const useTheme = () => useContext(ThemeContext);
