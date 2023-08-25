import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {taskDelete, editTask} from "../../redux/action";
import styles from './TaskChangeButtons.module.scss';
import deleteTask from '../../services/deleteTask'

type PropsType = {
     task:{
         name: string;
         id: string;
     }
}

const TaskChangeButtons: FC<PropsType> = (props) => {
    const dispatch = useDispatch()

   async function onclickDeleteButton() {
        dispatch(taskDelete(props.task.id));
        await deleteTask(props.task.id);
    }
    function onclickEditButton() {
        dispatch(editTask(props.task))
    }

    return(
        <div className={styles.containerButton} >
            <button className={styles.button} onClick={onclickEditButton}>Редактировать</button>
            <button className={styles.button} onClick={onclickDeleteButton}>Удалить</button>
        </div>
    )
}

export default TaskChangeButtons;