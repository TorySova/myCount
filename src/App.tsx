import React, { useState } from 'react';
import './App.css';
import Count from './Count';
import Setting from './Setting';

function App() {

  const [startValue, setStartValue] = useState<number>(0)
  const [count, setCount] = useState<number>(startValue)
  const [maxValue, setMaxValue] = useState<number>(1)
  const [error, setError] = useState<string>('')


  const inc = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }

  function reset() {
    setCount(startValue)
  }

  return (
    <div className="app">
      <Setting setStartValue={setStartValue}
              setMaxValue={setMaxValue}
              startValue={startValue}
              maxValue={maxValue}
              error={error}
              setError={setError}
              setCount={setCount}/>
      <Count inc={inc}
            reset={reset}
            count={count}
            maxValue={maxValue}
            startValue={startValue}
            error={error}  />
    </div>
  );
}

export default App;
