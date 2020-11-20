import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import { StateType } from './state/coutn-reducer';

type PropsRype = {
    counter: StateType
    set: (maxValue: number, minValue: number, count: number) => void
    error: string
    setError: (error: string) => void
    
}

const Setting = (props: PropsRype) => {
    debugger
    const [minValueLocal, setMinValueLocal] = useState<number>(props.counter.minValue);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(props.counter.minValue);
    // const minValue = props.counter.minValue
    // const maxValue = props.counter.minValue

    useEffect(() => {
        if (minValueLocal < 0) {
            props.setError('min не может быть меньше 0')
        // } else if (minValueLocal === maxValueLocal) {
        //     props.setError('min не может быть равен max')
        } else if (minValueLocal > maxValueLocal) {
            props.setError('min не может быть больше max')
        } else if (minValueLocal === 0 && maxValueLocal === 0) {
            props.setError('введите значения и нажмите set')
        } else {
            props.setError('')
        }
    }, [minValueLocal, maxValueLocal])

    const onChangeHeandler = () => {
        props.set(maxValueLocal, minValueLocal, minValueLocal )
    }

    return <div className='count'>
        <div className='displaying'>
            <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal} error={props.error} />
            <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal} error={props.error} />
        </div>
        <div className='displaying1'>
            <Buttons title={'set'} onClick={onChangeHeandler} disabled={props.error !== ''} />
        </div>
    </div>
}

export default Setting;