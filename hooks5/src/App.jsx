import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Content from "./Content";

import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>Context Theme Toggler</h1>
        <Content />
      </div>
    </ThemeProvider>
  );
}
export default App;
