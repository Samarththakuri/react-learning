import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevstate) => {
      return { ...prevstate, count: prevstate.count - 1 };
    });
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button>+</button>
    </>
  );
}

export default App;
