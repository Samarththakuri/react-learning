// import { useState } from "react";
// import "./App.css";

const { useState } = require("react");

// function App() {
//   const [state, setState] = useState({ count: 4, theme: "blue" });
//   const count = state.count;
//   const theme = state.theme;

//   function decrementCount() {
//     setState((prevstate) => {
//       return { ...prevstate, count: prevstate.count - 1 };
//     });
//   }
//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button>+</button>
//     </>
//   );
// }

// export default App;

// the better approach is to have different entties in seprate useState

import { useState } from "react";
import "./App.css";

function App() {
  // Split the object into two independent pieces of state
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    // No need for spread operators anymore!
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
