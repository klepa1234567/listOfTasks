import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {taskDelete, editTask, nameUserForTask} from "../../redux/action";
import styles from './TaskChangeButtons.module.scss';
import deleteTask from '../../services/deleteTask'
import {ReduxState} from "../../redux/type";

type PropsType = {
     task:{
         name: string;
         id: string;
     }
}

const TaskChangeButtons: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const selectedUsers = useSelector((state:ReduxState) => state.usersReducer.users);
    const selectedUserId = useSelector((state: ReduxState) => state.tasksReducer.task);

   async function onclickDeleteButton() {
        dispatch(taskDelete(props.task.id));
        await deleteTask(props.task.id);
    }
    function onclickEditButton() {
        dispatch(editTask(props.task))
    }
    const selectOption = selectedUsers.map((value) => {
        return <option key={value.id} value={value.id} >{value.name}</option>
    });

    return(
        <div className={styles.containerButton} >
            <button className={styles.button} onClick={onclickEditButton}>Редактировать</button>
            <button className={styles.button} onClick={onclickDeleteButton}>Удалить</button>

             <select onChange={(e) =>(dispatch(nameUserForTask(e.target.value, props.task.id)))}>
                {selectOption}
            </select>
        </div>
    )
}

export default TaskChangeButtons;