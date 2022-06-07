import React, {useMemo, useState} from 'react';
import Tasks from "./Tasks";

const TasksContainer = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const [newTaskText, setNewTaskText] = useState('')
    const [onChange, setOnChange] = useState({taskId: 0, isChange: false})

    const onTaskChange = (taskId, isChange) => {
        setOnChange({taskId: taskId, isChange: isChange})
    }
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
    return <Tasks setTasks={setTasks}
                  addTask={addTask}
                  editTask={editTask}
                  removeTask={removeTask}
                  searchedTask={searchedTask}
                  onTaskChange={onTaskChange}
                  filter={filter}
                  setFilter={setFilter}
                  newTaskText={newTaskText}
                  setNewTaskText={setNewTaskText}
                  onChange={onChange}
                  setOnChange={setOnChange}
                />
};

export default TasksContainer;
