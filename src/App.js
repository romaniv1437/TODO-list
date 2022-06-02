import './App.css';
import {useMemo, useState} from "react";
import TaskAddForm from "./components/TaskAddForm/TaskAddForm";
import Tasks from "./components/Tasks/Tasks";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'Перше завдання', text: 'вивчити html i css'},
        {id: 2, title: 'Друге завдання', text: 'вивчити JavaScript'},
        {id: 3, title: 'Третє завдання', text: 'вивчити ReactJS'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const sortedTask = useMemo(() => {
            console.log('SORTED')
            if (filter.sort) {
                return [...tasks].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            }
            return tasks
        }, [filter.sort, tasks])
    const sortedAndSearchedTask = useMemo(() => {
        return sortedTask.filter(task => task.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedTask])
    return (
        <div className="App">
            <h1>Список задач</h1>
            <TaskAddForm addTask={addTask}/>
            <TaskFilter filter={filter} setFilter={setFilter}/>
            <Tasks tasks={sortedAndSearchedTask} removeTask={removeTask}/>

        </div>
    );
}

export default App;
