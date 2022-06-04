import React from 'react';
import s from "../Tasks.module.css";
import {MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";

const TaskElement = (props) => {

    let task_elements = props.tasks.map(task => <div key={task.id} className={s.task_el}>
        <div className={s.left}>
            <p>{task.text}</p>
            <span>{task.difficulty}</span>
        </div>
        <div className={s.right}>
            <MdOutlineModeEditOutline onClick={() => props.onTaskChange(task.id, true)}/>
            <MdDeleteOutline onClick={() => props.removeTask(task.id)}/>
        </div>
    </div>)

    return (
        <div>
            {task_elements.length ? task_elements : <h3>Nothing To Do</h3>}
        </div>
    );
};

export default TaskElement;
