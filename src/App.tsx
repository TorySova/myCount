import React, { useState } from 'react';
import './App.css';
import Count from './Count';
import Setting from './Setting';

function App() {

  let [startValue, setStartValue] = useState<number>(0)

  const inc = () => {
    if (startValue < 5) {
      setStartValue(startValue + 1)
    }
  }

  function reset() {
    setStartValue(0)
  }

  return (
    <div className="app">
      <Setting />
      <Count inc={inc} reset={reset} startValue={startValue}  />
    </div>
  );
}

export default App;
