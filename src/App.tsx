import React, { useState } from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

function App() {

  let [state, setState] = useState<number>(0)

  let [disables, setDisables] = useState<boolean>(true)

  function inc(number: number) {
    if (state < 5) {
      setState(state+1)
    }
    setDisables(false)
  }

  function reset(number: number){
    setState(0)
    setDisables(true)
  }

  return (
    <div className="count">
      <Scoreboard state={state} />
      <Buttons inc={inc} reset={reset} disables={disables} state={state}/>
    </div>
  );
}

export default App;
