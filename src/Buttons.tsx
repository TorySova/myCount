import React from 'react';

type ButtonsPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

const Buttons = (props: ButtonsPropsType) => {

    return <button className='button' onClick={props.onClick} disabled={props.disabled}>
       {props.title}
    </button>
}

export default Buttons;
