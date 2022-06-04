import React from 'react';
import s from './DayShow.module.css'

const DayShow = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    let dayNumber = d.getDay();
    let monthNumber = d.getMonth() - 1; // because JS Date()
    let year = d.getFullYear()
    return (
        <h3 className={s.date}>{day} {dayNumber+'/'+monthNumber+'/'+year}</h3>
    );
};

export default DayShow;
