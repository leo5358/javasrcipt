import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    console.log("hello");
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>
      <p>{count}</p>
    </div>
  );
}