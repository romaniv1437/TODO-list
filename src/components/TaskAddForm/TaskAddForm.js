import React, {useState} from 'react';
import CustomInput from "../assets/Input/Input";
import s from './TaskAddForm.module.css'
import CustomButton from "../assets/Button/Button";

const TaskAddForm = (props) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onAddTask = (title, text) => {
        let newTask = {id: Date.now(), title, text}
        props.addTask(newTask)
        setTitle('')
        setText('')
    }

    return (
        <div className={s.addForm}>
            <CustomInput placeholder='Назва задачі' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <CustomInput  placeholder='Задача' value={text} onChange={(e)=>setText(e.target.value)}/>
            <CustomButton onClick={() => onAddTask(title, text)}>Добавити</CustomButton>
        </div>
    );
};

export default TaskAddForm;
