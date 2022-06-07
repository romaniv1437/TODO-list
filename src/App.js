import s from './App.module.css';
import Header from "./components/Header/Header";
import TasksContainer from "./components/Tasks/TasksContainer";

function App() {

    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Header />

                <div className={s.tasks__container}>
                    <TasksContainer />
                </div>
            </div>
        </div>
    );
}

export default App;
