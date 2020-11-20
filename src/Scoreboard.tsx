import React from 'react';

type ScoreboardPropsType = {
    count: number
    maxValue: number
    minValue: number
    error: string
}

const Scoreboard = (props:ScoreboardPropsType) => {
    debugger
    // const {count, error, maxValue} = props
   
    return <div>
        <div className={props.count === props.maxValue? 'maxValue' : 'number'}>{props.count}</div>
        <div className='textError'>{props.error? props.error : '' }</div>
    </div>
}

export default Scoreboard;