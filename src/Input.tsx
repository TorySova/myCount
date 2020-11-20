import React, { ChangeEvent } from 'react';

type PropsType = {
    name: string
    value: number
    error: string
    setValue: (number: number) => void
}

const Input = (props: PropsType) => {
    // const { name, setValue, value, error } = props
    const onChangeHeandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)
    }

    return (
        <div className='item'>
            <span >{props.name}</span>
            <input type="number"
                min='-1'
                value={props.value}
                className={props.error ? 'inputError' : 'input'}
                onChange={onChangeHeandler} />
        </div>
    )
}

export default Input;