import React from 'react';
import CustomInput from "../assets/Input/Input";
import Select from "../Select/Select";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <>
            <CustomInput placeholder='Пошук' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
            <Select
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort: sort})}
                defaultValue='Сортування за'
                options={[
                    {value: 'title', name: 'За назвою'},
                    {value: 'text', name: 'За текстом'},
                ]}
            />
        </>
    );
};

export default TaskFilter;
