import {useMemo, useState} from "react";
import TaskAddForm from "./components/TaskAddForm/TaskAddForm";
import Tasks from "./components/Tasks/Tasks";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import s from './App.module.css';
import Header from "./components/Header/Header";

function App() {

    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const searchedTask = useMemo(() => {
        return [...tasks].filter(task => task.text.toLowerCase().includes(filter.query))
    }, [filter.query, tasks])
    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Header />

                <div className={s.tasks__container}>
                    <div className={s.tasks}>
                        <TaskFilter filter={filter} setFilter={setFilter}/>
                        <Tasks tasks={searchedTask} removeTask={removeTask}/>
                    </div>
                </div>

                <TaskAddForm addTask={addTask}/>
            </div>
        </div>
    );
}

export default App;
