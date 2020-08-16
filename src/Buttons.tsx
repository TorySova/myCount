import React from 'react';

type ButtonsPropsType ={
    inc: (number: number) => void
    reset: (number: number) => void
    disables: boolean
    state: number
}


const Buttons = (props: ButtonsPropsType) => {

    const plusNumber = () => props.inc(0)
    const resetNumber = () => props.reset(0)


    return <div className="buttons" >
        <button className="inc"
            onClick={plusNumber}
            disabled={props.state === 5}
            >
            inc
        </button>
        <button className="reset"
            onClick={resetNumber}
            disabled={props.disables}>
            reset
        </button>
    </div>
}

export default Buttons;
