import {
    TASK_VALUE,
    TASK_DELETE,
    EDIT_TASK,
    MODIFYING_EXISTING_TASK,
    ALL_TASKS_SERVER, NAME_USER_FOR_TASK,
} from "./action";

const initialState = {
    task: [],
    editTask: {},
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_VALUE:
            return {
               ...state,
               task: [...state.task, {name:action.task, id: action.id, idUser: null}],
            };
        case TASK_DELETE:
            return {
                ...state,
                task: state.task.filter((taskValue) => taskValue.id !== action.id),
                editTask: state.editTask.id === action.id ? {} : state.editTask,
            };
        case EDIT_TASK:
           return {
                ...state,
               editTask: state.task.find((value) => value.id === action.task.id) || {}
            };
        case MODIFYING_EXISTING_TASK:
           return {
               ...state,
               task: state.task.map((value) => {
                    if(value.id === action.task.id){
                        return {
                            ...value,
                            name : action.task.name
                        }
                    }
                    return value
               })
           };
        case ALL_TASKS_SERVER:
            return {
                ...state,
                task: action.tasks
            };
        case NAME_USER_FOR_TASK:
            return {
                ...state,
                task: state.task.map((value) => {
                    if(value.id === action.idTask){
                        return{
                            ...value,
                            idUser: action.idUser
                        }
                    }
                    return value;
                })
            }


        default:
            return state
    }
};
export default tasksReducer;