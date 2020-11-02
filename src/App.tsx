import React, { useEffect, useState } from 'react';
import './App.css';
import Count from './Count';
import Setting from './Setting';

function App() {

  const [count, setCount] = useState<number>(0)
  const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem('minValue')))
  const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))
  const [error, setError] = useState<string>('')


  // useEffect(() => {
  //   const stateAsString = localStorage.getItem('minValue')
  //   if (stateAsString) {
  //     const state = JSON.parse(stateAsString)
  //   }


  // }, [])

  const inc = () => {
    if (count < maxValue) {
      setMinValue(minValue + 1)
    }
  }

  function reset() {
    setMinValue(count)
  }

  return (
    <div className="app">
      <Setting setCount={setCount}
        setMaxValue={setMaxValue}
        count={count}
        maxValue={maxValue}
        error={error}
        setError={setError}
        setMinValue={setMinValue}
        minValue={minValue} />
      <Count inc={inc}
        reset={reset}
        minValue={minValue}
        maxValue={maxValue}
        count={count}
        error={error} />
    </div>
  );
}

export default App;
