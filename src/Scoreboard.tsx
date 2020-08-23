import React from 'react';

type ScoreboardPropsType = {
    startValue: number
}

const Scoreboard = (props:ScoreboardPropsType) => {
    return <div className={props.startValue === 5? 'white' : ''}>
        {props.startValue }
    </div>
}

export default Scoreboard;