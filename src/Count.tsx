import React from 'react';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

type CountPropsType = {
    inc: () => void
    reset: () => void
    count: number
    maxValue: number
    startValue: number
    error: string
}

const Count = (props: CountPropsType) => {

    return <div className='count'>
        <div className='displaying'>
            <Scoreboard count={props.count } maxValue={props.maxValue} error={props.error}/>
        </div>
        <div className='displaying1'>
            <Buttons title={'inc'} onClick={props.inc} disabled={props.count === props.maxValue || props.error!==''}/>
            <Buttons title={'reset'} onClick={props.reset} disabled={props.count === props.startValue || props.error!==''}/>
        </div>
    </div>
}

export default Count;