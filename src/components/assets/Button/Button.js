import React from 'react';
import s from './Button.module.css'
const CustomButton = (props) => {
    return (
        <button className={s.button} {...props}>{props.children}</button>
    );
};

export default CustomButton;
