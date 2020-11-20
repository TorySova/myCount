import React from 'react';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';
import { StateType } from './state/coutn-reducer';

type CountPropsType = {
    inc: () => void
    reset: () => void
    counter: StateType
    error: string
}

const Count = (props: CountPropsType) => {
    debugger
    // const count = props.counter.count
    // const maxValue = props.counter.maxValue
    // const minValue = props.counter.minValue
    return <div className='count'>
        <div className='displaying'>
            <Scoreboard count={props.counter.minValue} maxValue={props.counter.maxValue} minValue={props.counter.minValue} error={props.error}/>
        </div>
        <div className='displaying1'>
            <Buttons title={'inc'} onClick={props.inc} disabled={props.counter.minValue === props.counter.maxValue || props.error!==''}/>
            <Buttons title={'reset'} onClick={props.reset} disabled={props.counter.minValue === props.counter.count || props.error!==''}/>
        </div>
    </div>
}

export default Count;