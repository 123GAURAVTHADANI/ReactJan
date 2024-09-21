import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [gaurav, setGaurav] = useState(0);
  const [isValid, setIsValid] = useState(true);

  let handleIncrement = () => {
    setGaurav((c) => c + 1);
  };
  let handleDecrement = () => {
    setGaurav((c) => c - 1);
  };
  return (
    <div>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => setIsValid((initial) => !initial)}>Toggle</button>
      <Child gaurav={gaurav} isValid={isValid} />
    </div>
  );
}

export default App;
