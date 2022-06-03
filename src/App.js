import {useMemo, useState} from "react";
import TaskAddForm from "./components/TaskAddForm/TaskAddForm";
import Tasks from "./components/Tasks/Tasks";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import s from './App.module.css';
import Header from "./components/Header/Header";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, text: 'taska', difficulty: 'medium'},
        {id: 2, text: 'taska2', difficulty: 'medium'},
        {id: 3, text: 'taska3', difficulty: 'medium'},
    ])
    const [filter, setFilter] = useState({query: ''})
    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    const editTask = (taskId, newText) => {
        setTasks([...tasks].map(task => {
            if (task.id === taskId) {
                return {...task, text: newText}
            }
            return task
        }))
    }
    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const searchedTask = useMemo(() => {
        if (filter.query) {
            return [...tasks].filter(task => task.text.toLowerCase().includes(filter.query.toLowerCase()))
        }
        return tasks
    }, [filter.query, tasks])
    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Header />

                <div className={s.tasks__container}>
                    <div className={s.tasks}>
                        <TaskFilter filter={filter} setFilter={setFilter}/>
                        <Tasks tasks={searchedTask} removeTask={removeTask} editTask={editTask}/>
                    </div>
                </div>

                <TaskAddForm addTask={addTask}/>
            </div>
        </div>
    );
}

export default App;
