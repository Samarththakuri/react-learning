import React, { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const expensiveCalculation = (data) => {
    console.log("Calculating......");
    for (let i = 0; i < 1000000000; i++) {}
    return data.length;
  };
  const totalItems = useMemo(() => {
    return expensiveCalculation(items);
  }, [items]);
  return (
    <div>
      <h1>Total:{totalItems}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter:{count}
      </button>
    </div>
  );
}
export default App;
