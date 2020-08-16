import React from 'react';

type ScoreboardPropsType = {
    state: number
}

const Scoreboard = (props: ScoreboardPropsType) => {

    const { state } = props

    return <div className="number">
        <div className={state === 5 ? 'over' : ''}>{state}</div>
    </div>
}

export default Scoreboard;