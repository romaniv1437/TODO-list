import React from 'react';
import s from './Tasks.module.css'
import TaskChangeForm from "./TaskChangeForm/TaskChangeForm";
import TaskElement from "./TaskElement/TaskElement";
import TaskFilter from "./TaskFilter/TaskFilter";
import TaskAddForm from "./TaskAddForm/TaskAddForm";

const Tasks = (props) => {
    return (
        <div className={s.tasks}>
            <div className={s.tasks_top}>
                <TaskFilter filter={props.filter} setFilter={props.setFilter}/>
                {props.onChange.isChange ? <TaskChangeForm onChange={props.onChange}
                                                     newTaskText={props.newTaskText}
                                                     setNewTaskText={props.setNewTaskText}
                                                     onTaskChange={props.onTaskChange}
                                                     editTask={props.editTask}/> :
                    <TaskElement tasks={props.searchedTask}
                                 onTaskChange={props.onTaskChange}
                                 removeTask={props.removeTask}
                    />
                }
            </div>
            <TaskAddForm addTask={props.addTask}/>
        </div>
    );
};

export default Tasks;

