import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  // Memoizing handleClick to prevent unnecessary re-renders of ChildComponent
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      {/* ExpensiveComponent */}
      <div>
        <h2>Expensive Component</h2>
        <ExpensiveComponent />
      </div>
      <hr />

      {/* Counter and ChildComponent */}
      <div>
        <h2>Counter and Child Component</h2>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
        <ChildComponent buttonName="Click Me" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
