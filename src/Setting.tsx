import React from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Setting = () => {

    const setChange = () => {alert('work!')}

    return <div className='count'>
        <div className='displaying'>
            <Input name={'max value'}/>
            <Input name={'min value'}/>
        </div>
        <div className='displaying1'>
            <Buttons title={'set'} onClick={setChange} disabled={false}/>
        </div>
    </div>
}

export default Setting;