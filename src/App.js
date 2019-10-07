import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="App">
      <Counter
        value={counterValue}
        onChange={newValue => setCounterValue(newValue)}
      />
    </div>
  );
}

export default App;
