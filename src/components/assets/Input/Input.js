import React from 'react';
import s from './Input.module.css'

const CustomInput = (props) => {
    return (
        <input className={s.input} type='text' {...props}/>
    );
};

export default CustomInput;
