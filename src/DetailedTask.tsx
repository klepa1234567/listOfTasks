import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {ReduxState} from "./redux/type";
import getTaskById from "./services/getTask";
import deleteTask from "./services/deleteTask";
import {taskDelete} from './redux/action';


function DetailedTask() {
    const {id} = useParams();
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false)

    async function withRequestDeleteTask(){
        setLoading(true)
        try{
            const value = await getTaskById(id);
            setState(value.data.name);
            setLoading(false);

        } catch(error) {
            console.error(error);
        }
    }

     useEffect(()=>{
         withRequestDeleteTask()
    },[])

    const selectedData = useSelector((state:ReduxState) => state.tasksReducer.task);
    const dataAboutSelectedTask = selectedData.find(value => value.id === id);


    function onclickDeleteTask (){
            if(id !== undefined){deleteTask(id).then((value)=>{
                console.log('v',value)
                taskDelete(id)
            })}
        setState('');

    }

    return(
        <>
            <Link to={'/'}>
                К задачам
            </Link>
            {loading && <div>loading...</div>}
            {!dataAboutSelectedTask ? <h2>{state}</h2> : <h2>{dataAboutSelectedTask.name}</h2>}
            <Link onClick={onclickDeleteTask} to={'/'} >
                Удалить задачу
            </Link>
        </>

    )
}

export default DetailedTask;