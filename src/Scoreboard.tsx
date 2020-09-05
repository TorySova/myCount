import React from 'react';

type ScoreboardPropsType = {
    count: number
    maxValue: number
    error: string
}

const Scoreboard = (props:ScoreboardPropsType) => {
    const {count, error, maxValue} = props
    return <>
        <div className={count === maxValue? 'maxValue' : 'number'}>{count}</div>
        <div className='textError'>{error? error : '' }</div>
    </>
}

export default Scoreboard;