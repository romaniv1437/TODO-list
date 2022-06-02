import React from 'react';
import s from './Tasks.module.css'
import CustomButton from "../assets/Button/Button";

const Tasks = (props) => {

    let task_elements = props.tasks.map(task => <div key={task.id} className={s.task_el}>
        <h3>{task.title}</h3>
        <p>{task.text}</p>
        <CustomButton onClick={() => props.removeTask(task.id)}>Видалити</CustomButton>
    </div>)
    return (
        <div className={s.tasks}>
            {task_elements.length? task_elements : <h1>Задач немає</h1>}
        </div>
    );
};

export default Tasks;
