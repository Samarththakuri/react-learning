import React from "react";
import { createRoot } from "react-dom/client";

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}
const areactElement = React.createElement(
  "a",
  { href: "https://google", target: "_blank" },
  "click to visit google"
);
const root = createRoot(document.getElementById("root"));
root.render(areactElement);
