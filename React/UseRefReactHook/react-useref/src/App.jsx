import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef();
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("main ferse render hogya hu");
  });

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div className="app-container">
      <h1 className="title">Stopwatch & Counter App</h1>

      <div className="stopwatch">
        <h2>Stopwatch: {time} seconds</h2>
        <div className="button-group">
          <button className="button start" onClick={startTimer}>
            Start
          </button>
          <button className="button stop" onClick={stopTimer}>
            Stop
          </button>
          <button className="button reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>

      <div className="counter">
        <button ref={btnRef} className="button increment" onClick={handleIncrement}>
          Increment Count
        </button>
        <button className="button change-color" onClick={changeColor}>
          Change Button Color
        </button>
        <div className="count-display">Count: {count}</div>
      </div>
    </div>
  );
}

export default App;
