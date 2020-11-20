import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Count from './Count';
import Setting from './Setting';
import { incValueAC, resetValueAC, setValueAC, StateType } from './state/coutn-reducer';
import { AppStoreType } from './state/store';

function App() {
  debugger
  const counter = useSelector<AppStoreType, StateType>((state) => state.count)
  const dispatch = useDispatch()
  
  const [error, setError] = useState<string>('')

  const inc = () => {
    dispatch(incValueAC())
  }

  function reset() {
    dispatch(resetValueAC())
  }

  const set = (maxValue: number, minValue: number, count: number) => {
    dispatch(setValueAC(maxValue, minValue, count))
  }

  return (
    <div className="app">
      <Setting 
        counter={counter}
        error={error}
        setError={setError}
        set={set} />
      <Count inc={inc}
        reset={reset}
        counter={counter}
        error={error} />
    </div>
  );
}

export default App;
