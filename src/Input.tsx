import React, {useState, ChangeEvent,useEffect, useRef} from 'react';
import  styles from './input.module.scss';
import {taskValue, modifyingExistingTask} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Email from './component/componentIcon/email';
import {v4 as uuidv4} from "uuid";
import {Status} from "./constants";
import Spinner from  './component/Spinner/spinner';
import Check from './component/componentIcon/check';
import {ReduxState} from './redux/type';
import createTask from './services/createTask';
import putTask from './services/putTask';
import ButtonSpinner from "./component/Spinner/ButtonSpinner";


function Input() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [error, setError] = useState('');
    const editTask = useSelector((state:ReduxState) => state.tasksReducer.editTask);
    const dispatch = useDispatch();

    const onChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    };

    const onClickButtonCreateTask = async () => {
        const taskId = uuidv4();
        setLoading(true);
        setValue('');

        if(value === '') {
            setLoading(false);
            setError("задача не задана");
            return;
        }

          try {
            const response = await createTask({name: value, id: taskId})
            setButtonSpinner(false);
            setLoading(false);
            setError('');
            if(response.status === Status.SUCCESS || response.status === Status.CREATED){
                dispatch(taskValue(value, taskId));
            }

        } catch(err) {
                setButtonSpinner(false);
                setLoading(false);
                setError('ошибка сервера');
            }
    };
    const ref = useRef(false);
    useEffect(() => {
        if(!ref.current){
            ref.current = true
            return;
        }
       if(editTask.name !== undefined){
           setValue(editTask.name);
           setIsEditMode(!isEditMode);
       }
        if(Object.keys(editTask).length === 0){
            setValue('')
            setIsEditMode(!isEditMode);
        }
    }, [editTask]);


    async function  onClickButtonCheck() {
        setIsEditMode(!isEditMode);
        setValue('');
        setButtonSpinner(true);


       try {
           await putTask({name: value, id: editTask.id});

           dispatch(modifyingExistingTask({name: value, id: editTask.id}));
           setButtonSpinner(false);
       } catch (err) {
           console.error(err);
           setError('Ошибка сервера');
           setButtonSpinner(false);
       }
    }

    function renderSubmitButton() {
        if(!isEditMode){
           return  (
               <button className={styles.button} onClick={onClickButtonCreateTask}>
                   {!buttonSpinner? <Email/> : <ButtonSpinner/>}
               </button>
           );
        }

        return (
            <button className={styles.button} onClick={onClickButtonCheck}>
                {!buttonSpinner? <Check/> : <ButtonSpinner/>}
            </button>
        );
    }

    return(
        <div className={styles.mainContainer} >
            <div className={styles.inputContainer}>
                <div className={styles.container}/>
                <div className={styles.containerInput}>
                    <input className={styles.input} value={value} onChange={onChange}/>
                    {renderSubmitButton()}
                </div>
            </div>
            {loading && <Spinner/>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default Input;
