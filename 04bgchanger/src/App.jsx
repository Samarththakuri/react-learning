import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <button onClick={() => setBgColor("red")}>Red</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("grey")}>Grey</button>
      <button onClick={() => setBgColor("purple")}>Purple</button>
      <button onClick={() => setBgColor("yellow")}>Yellow</button>
      <button onClick={() => setBgColor("green")}>Green</button>
    </div>
  );
}
