import React, {useState, useEffect} from 'react';
import Input from "./Input";
import {useSelector,useDispatch} from 'react-redux'
import  styles from './App.module.scss';
import TaskChangeButtons from './component/TaskChangeButtons/TaskChangeButtons';
import {Link} from 'react-router-dom';
import {allTasksServer} from './redux/action';
import Spinner from './component/Spinner/spinner';
import {ReduxState} from "./redux/type";
import getTasks from './services/getTasks';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getTasks().then((tasksServer) =>{
                dispatch(allTasksServer(tasksServer.data));
                setLoading(false);
            });
    },[]);

    const selectedTasks = useSelector((state:ReduxState) => state.tasksReducer.task);
    const dispatch = useDispatch();
    return (
        <div className={styles.App}>
            <div className={styles.categoryWrapper} >
                <Link to={`/user`}>пользователь</Link>
            </div>
            {loading ? <Spinner/> : (
                <>
                    <header className={styles.container}>
                        <Input  />
                    </header>
                    {selectedTasks.map((value)=>(
                        <div key={value.id} className={styles.containerTask}>
                            <Link to={`/task/${value.id}`}>
                                {value.name}
                            </Link>
                            <TaskChangeButtons task={value} />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default App;
