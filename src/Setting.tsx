import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Input from './Input';

type PropsRype = {
    setCount: (value: number) => void
    setMaxValue: (value: number) => void
    count: number
    maxValue: number
    error: string
    setError: (error: string) => void
    setMinValue: (value: number) => void
}

const Setting = (props: PropsRype) => {
    const { error, maxValue, count, setError, setMaxValue, setCount, setMinValue } = props

    const [minValueLocal, setMinValueLocal] = useState<number>(0);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);


    useEffect(() => {
        if (minValueLocal < 0) {
            setError('min не может быть меньше 0')
        } else if (minValueLocal === maxValueLocal) {
            setError('min не может быть равен max')
        } else if (minValueLocal > maxValueLocal) {
            setError('min не может быть больше max')
        } else {
            setError('')
        }
    }, [minValueLocal, maxValueLocal])

    const onChangeHeandler = () => {

        // let a = {
        //     max: 10,
        //     min: 3
        // }

        localStorage.setItem('minValue', JSON.stringify(minValueLocal) )
        localStorage.setItem('maxValue', JSON.stringify(maxValueLocal) )

        setMaxValue(maxValueLocal)
        setCount(minValueLocal)
        setMinValue(minValueLocal)
    }

    return <div className='count'>
        <div className='displaying'>
            <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal} error={error} />
            <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal} error={error} />
        </div>
        <div className='displaying1'>
            <Buttons title={'set'} onClick={onChangeHeandler} disabled={error !== ''} />
        </div>
    </div>
}

export default Setting;