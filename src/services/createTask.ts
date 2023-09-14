import axios from "axios";
import {serverUrl} from "./constants";

type Create = {
    name: string,
    id: string,
    idUser: string | null,
}

function createTask(data: Create) {
    return axios.post(`${serverUrl}/tasks`, data);
}

export default createTask;