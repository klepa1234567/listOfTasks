import axios from "axios";
import {serverUrl} from "./constants";

function getTaskById(id: string | undefined) {
    if(!id){
        return Promise.reject()
    }
    return axios.get(`${serverUrl}/tasks/${id}`)
}

export default getTaskById;