//Passing props as children and functions
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* Button component with children */}
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/* Card components */}
      <Card name="ananya">
        <h1>React Tutorial</h1>
        <p>Trying to be consistent</p>
        <p>Consistency is a must</p>
      </Card>
      <Card>
        <p>I am a child component</p>
      </Card>
    </div>
  );
}

export default App;
