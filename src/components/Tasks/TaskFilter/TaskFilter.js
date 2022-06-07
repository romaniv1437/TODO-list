import React from 'react';
import CustomInput from "../../assets/Input/Input";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <>
            <CustomInput placeholder='Пошук' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
        </>
    );
};

export default TaskFilter;
