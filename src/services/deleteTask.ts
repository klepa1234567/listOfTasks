import axios from "axios";
import {serverUrl} from "./constants";



function deleteTask(id : any){
    return axios.delete(`${serverUrl}/tasks/${id}`)
}

export default deleteTask;