import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [resourceType, setResource] = useState(0);
  console.log("hello");
  useEffect(() => {
    console.log("render");
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
