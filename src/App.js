import React, { useState } from "react";

import "./App.css";

const App = () => {
  const MAXIMUM_COUNT = 100;
  const MINIMUM_COUNT = 0;
  const [counter, setCounter] = useState(MINIMUM_COUNT);

  const handleCounterChange = (event) => {
    console.log("val", event.target.value);
    let cVal;
    if (!isNaN(event.target.value)) {
      if (event.target.value <= MINIMUM_COUNT) cVal = MINIMUM_COUNT;
      else if (event.target.value >= MAXIMUM_COUNT) cVal = MAXIMUM_COUNT;
      else {
        console.log("hhh");
        cVal = event.target.value;
      }
    } else console.log("Please Enter Number Only!!!");
    setCounter(cVal);
  };

  const handleMinusChange = () => {
    setCounter((prevState) => {
      return Math.max(prevState - 1, MINIMUM_COUNT);
    });
  };

  const handleAdd = () => {
    setCounter((prevState) => Math.min(counter + 1, MAXIMUM_COUNT));
  };

  return (
    <div className="container">
      <div className="mainBox">
        <div className="counterBox">
          <button onClick={handleMinusChange} className="btn-primary sub-btn">
            <i className="fas fa-minus icon-clr"></i>
          </button>
          <input
            type="text"
            name="counterInput"
            value={counter}
            onChange={(event) => handleCounterChange(event)}
            className="input-primary"
          />
          <button onClick={handleAdd} className="btn-primary add-btn">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
