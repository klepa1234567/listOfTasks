import axios from "axios";
import {serverUrl} from "./constants";

type TasksFromServer = {
    name: string;
    id: string;
}[];

function getTasks() {
    return axios.get<TasksFromServer>(`${serverUrl}/tasks`);
}

export default getTasks;

