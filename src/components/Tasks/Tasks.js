import React, {useState} from 'react';
import s from './Tasks.module.css'
import {MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";
import CustomInput from "../assets/Input/Input";
import CustomButton from "../assets/Button/Button";

const Tasks = (props) => {
    const [newTaskText, setNewTaskText] = useState('')
    const [onChange, setOnChange] = useState(false)
    const onTaskChange = () => {
        setOnChange(!onChange)
    }

    let task_elements = props.tasks.map(task => <div key={task.id} className={s.task_el}>
                <div className={s.left}>
                    <p>{task.text}</p>
                    <span>{task.difficulty}</span>
                </div>
                <div className={s.right}>
                    {onChange ? <div className={s.change_task}>
                        <CustomInput placeholder='Enter new text' value={newTaskText}
                                     onChange={(e) => setNewTaskText(e.target.value)}/>
                        <CustomButton onClick={() => {
                            props.editTask(task.id, newTaskText);
                            setNewTaskText('')
                            onTaskChange(false)
                        }}>save</CustomButton>
                    </div> : null}
                    <MdOutlineModeEditOutline onClick={() => onTaskChange(task.id, true)}/>
                    <MdDeleteOutline onClick={() => props.removeTask(task.id)}/>
                </div>
            </div>)

    return (
        <div className={s.tasks}>
            {task_elements.length ? task_elements : <h3>Nothing To Do</h3>}
        </div>
    );
};

export default Tasks;
