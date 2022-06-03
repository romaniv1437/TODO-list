import React, {useState} from 'react';
import CustomInput from "../assets/Input/Input";
import s from './TaskAddForm.module.css'
import CustomButton from "../assets/Button/Button";
import {AiFillPlusCircle, AiFillCloseCircle} from "react-icons/ai";
import Select from "../assets/Select/Select";

const TaskAddForm = (props) => {

    const [isForm, setForm] = useState(false)
    const [text, setText] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const onAddTask = (text) => {
        let newTask = {id: Date.now(), text, difficulty}
        props.addTask(newTask)
        console.log(newTask)
        setText('')
    }

    const showForm = () => setForm(!isForm)

    return (
        <>
            {isForm ? <div className={s.addForm}>
                <div className={s.form__background}>
                    <CustomInput placeholder='New task' value={text} onChange={(e) => setText(e.target.value)}/>
                    <Select
                        value={difficulty}
                        onChange={diff => setDifficulty(diff)}
                        defaultValue='Task difficulty'
                        options={[
                            {value: 'easy'},
                            {value: 'medium'},
                            {value: 'hard'},
                        ]}
                    />
                    <CustomButton onClick={() => {
                        onAddTask(text);
                        showForm();
                    }}>Add task</CustomButton>
                    <AiFillCloseCircle onClick={showForm}/>
                </div>
                </div>
                : <div className={s.icon_form}>
                <AiFillPlusCircle onClick={showForm}/>
            </div>}
        </>

    );
};

export default TaskAddForm;
