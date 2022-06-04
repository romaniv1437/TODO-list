import React, {useState} from 'react';
import s from './Tasks.module.css'
import TaskChangeForm from "./TaskChangeForm/TaskChangeForm";
import TaskElement from "./TaskElement/TaskElement";

const Tasks = (props) => {
    const [newTaskText, setNewTaskText] = useState('')
    const [onChange, setOnChange] = useState({taskId: 0, isChange: false})
    const onTaskChange = (taskId, isChange) => {
        setOnChange({taskId: taskId, isChange: isChange})
    }

    return (
        <div className={s.tasks}>
            {onChange.isChange ?
                <TaskChangeForm onChange={onChange}
                                newTaskText={newTaskText}
                                setNewTaskText={setNewTaskText}
                                onTaskChange={onTaskChange}
                                editTask={props.editTask}/> :
                <TaskElement tasks={props.tasks}
                             onTaskChange={onTaskChange}
                             removeTask={props.removeTask}/>
            }
        </div>
    );
};

export default Tasks;
