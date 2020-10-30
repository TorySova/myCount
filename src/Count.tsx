import React from 'react';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

type CountPropsType = {
    inc: () => void
    reset: () => void
    minValue: number
    maxValue: number
    count: number
    error: string
}

const Count = (props: CountPropsType) => {

    return <div className='count'>
        <div className='displaying'>
            <Scoreboard count={props.minValue } maxValue={props.maxValue} error={props.error}/>
        </div>
        <div className='displaying1'>
            <Buttons title={'inc'} onClick={props.inc} disabled={props.minValue === props.maxValue || props.error!==''}/>
            <Buttons title={'reset'} onClick={props.reset} disabled={props.minValue === props.count || props.error!==''}/>
        </div>
    </div>
}

export default Count;