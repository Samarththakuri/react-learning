import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    //(counter + 1); // You must not do counter++
    //React only tracks changes done via setCounter.
    setCounter((prevCounter) => prevCounter + 1); //this is callback function
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course 02 {counter}</h1>
      <h2>Counter value</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
