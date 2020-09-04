import React, { ChangeEvent } from 'react';

type PropsType = {
    name: string
}


const Input = (props: PropsType) => {
    
    return (
        <div className='item'>
        <span className='value'>{props.name}</span>
        <input type="number"
            className={"input"}/>
    </div>
    )
}

export default Input;