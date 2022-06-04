import React from 'react';
import s from "../Tasks.module.css";
import CustomInput from "../../assets/Input/Input";
import {MdFileDownloadDone, MdOutlineClose} from "react-icons/md";


const TaskChangeForm = (props) => {
    return <div className={s.task_change_form}>
        <h3>Change your task</h3>
        <div className={s.change_task}>
            <CustomInput placeholder='Enter new text' value={props.newTaskText}
                         onChange={(e) => props.setNewTaskText(e.target.value)}/>
            <div className={s.icons}>
                <MdFileDownloadDone onClick={() => {
                    props.editTask(props.onChange.taskId, props.newTaskText);
                    props.setNewTaskText('')
                    props.onTaskChange(0, false)
                }}/>
                <MdOutlineClose onClick={() => props.onTaskChange(0, false)}/>
            </div>
        </div>
    </div>
};

export default TaskChangeForm;
