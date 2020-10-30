import React, { ChangeEvent } from 'react';

type PropsType = {
    name: string
    value: number
    setValue: (valeu: number) => void
    error: string
}

const Input = (props: PropsType) => {
    const { name, setValue, value, error } = props
    const onChangeHeandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <div className='item'>
            <span >{name}</span>
            <input type="number"
                min='-1'
                // value={value}
                className={error ? 'inputError' : 'input'}
                onChange={onChangeHeandler} />
        </div>
    )
}

export default Input;