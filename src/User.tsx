import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUsers, deleteUser} from "./redux/actionUsers";
import {ReduxState} from "./redux/type";
import axios from "axios";
import { v4 as uuid } from 'uuid';

function User(){
    const [userName, userNameState] = useState('');
    const selectedData = useSelector((state:ReduxState) => state.usersReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3003/users')
            .then((n)=>{
                n.data.forEach((value: any) => {
                    dispatch(addUsers(value.name, value.id))
                })
            })
    },[])

    function onchange(e: any){
        userNameState(e.target.value);
    }
    function onclick(){
        const myUUID = uuid();
        axios.post('http://localhost:3003/users', {name: userName, id: myUUID})
            .then(() => {

                dispatch(addUsers(userName,myUUID))
            })
        userNameState('');
    }

    function onclickDeleteTask (id: string){
        axios.delete(`http://localhost:3003/users/${id}`);
        dispatch(deleteUser(id))
    }

    const usersName = selectedData.map((value)=>{
        return(
            <div key={value.id}>
                <h3>{value.name}</h3>
                <button onClick={() => onclickDeleteTask(value.id)}>Удалить</button>
            </div>

        )
    })

    return(
        <>
            <input value={userName} onChange={onchange} />
            <button onClick={onclick}>Создать</button>
            <Link to={'/'}>К задачам</Link>
            {usersName}
        </>
    )
}

export default User;