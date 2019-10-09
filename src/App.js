import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [stepValue, setStepValue] = useState(0);

  return (
    <div className="App">
      <h1>The Super Cool Counting App!</h1>
      <div>
        <h2>Step count</h2>
        <Counter
          value={stepValue}
          onChange={newValue => setStepValue(newValue)}
        />

        <h2>Number of beers Bender has drunk today</h2>

        <Counter
          value={counterValue}
          onChange={newValue => setCounterValue(newValue)}
          step={stepValue}
        />
      </div>
      <div>
        <Form onSave={user => console.log(user)} />
      </div>
    </div>
  );
}

export default App;
