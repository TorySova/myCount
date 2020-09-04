import React from 'react';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

type CountPropsType = {
    inc: () => void
    reset: () => void
    startValue: number
}

const Count = (props: CountPropsType) => {

    return <div className='count'>
        <div className='displaying'>
            <Scoreboard startValue={props.startValue }/>
        </div>
        <div className='displaying1'>
            <Buttons title={'inc'} onClick={props.inc} disabled={props.startValue === 5}/>
            <Buttons title={'reset'} onClick={props.reset} disabled={props.startValue === 0}/>
        </div>
    </div>
}

export default Count;