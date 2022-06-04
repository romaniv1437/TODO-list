import React from 'react';
import s from "../Tasks.module.css";
import CustomInput from "../../assets/Input/Input";
import CustomButton from "../../assets/Button/Button";

const TaskChangeForm = (props) => {
    return (
            <>{props.onChange.isChange ? <div className={s.change_task}>
                    <CustomInput placeholder='Enter new text' value={props.newTaskText}
                                 onChange={(e) => props.setNewTaskText(e.target.value)}/>
                    <CustomButton onClick={() => {
                        props.editTask(props.onChange.taskId, props.newTaskText);
                        props.setNewTaskText('')
                        props.onTaskChange(0, false)
                    }}>save</CustomButton>
            </div> : null}</>
    );
};

export default TaskChangeForm;
