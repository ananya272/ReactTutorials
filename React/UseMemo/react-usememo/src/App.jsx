import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div className="app-container">
      <h1 className="title">Memoized Computation</h1>

      <div className="counter">
        <button className="button increment" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <div className="count-display">Count: {count}</div>
      </div>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter a number"
          className="input-field"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <div className="result">Double: {doubleValue}</div>
      </div>
    </div>
  );
}

export default App;
