import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import Buttons from './Buttons';
import Input from './Input';

type PropsRype = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    error: string
    setError: (error: string) => void
    setCount: (value: number) => void
}

const Setting = (props: PropsRype) => {
    const { error, maxValue, startValue, setError, setMaxValue, setStartValue, setCount } = props

    const [minValueLocal, setMinValueLocal] = useState<number>(0);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);

    const isError = useCallback(() => {
        if(minValueLocal < 0 ) {
            setError('min не может быть меньше 0')
        }else if(minValueLocal === maxValueLocal) {
            setError('min не может быть равен max')
        }else if(minValueLocal > maxValueLocal) {
            setError('min не может быть больше max')
        }else {
            setError('')
        }
    }, [minValueLocal, maxValueLocal, setError])

    useEffect(() => {
        isError()
      }, [minValueLocal, maxValueLocal, isError])

    const onChangeHeandler = () => {
        setMaxValue(maxValueLocal)
        setStartValue(minValueLocal)
        setCount(minValueLocal)
    }




    return <div className='count'>
        <div className='displaying'>
            <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal} error={error}/>
            <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal} error={error}/>
        </div>
        <div className='displaying1'>
            <Buttons title={'set'} onClick={onChangeHeandler} disabled={error!==''} />
        </div>
    </div>
}

export default Setting;