import React from 'react';
import s from './Tasks.module.css'
import {MdDeleteOutline, MdOutlineModeEditOutline}  from "react-icons/md";

const Tasks = (props) => {

    let task_elements = props.tasks.map(task => <div key={task.id} className={s.task_el}>
        <div className={s.left}>
            <p>{task.text}</p>
            <span>{task.difficulty}</span>
        </div>
        <div className={s.right}>
            <MdOutlineModeEditOutline />
            <MdDeleteOutline onClick={() => props.removeTask(task.id)}/>
        </div>

    </div>)
    return (
        <div className={s.tasks}>
            {task_elements.length? task_elements : <h3>Nothing To Do</h3>}
        </div>
    );
};

export default Tasks;
