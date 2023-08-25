import axios from "axios";
import {serverUrl} from "./constants";

type Data = {
    name:string,
    id:string,
}

function putTask({name, id}:Data) {
    return axios.put(`${serverUrl}/tasks/${id}`, {name, id});
}

export default putTask;