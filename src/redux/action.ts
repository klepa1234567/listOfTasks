export const TASK_VALUE ='TASK_VALUE';
export const TASK_DELETE = 'TASK_DELETE';
export const EDIT_TASK = 'EDIT_TASK';
export const MODIFYING_EXISTING_TASK = 'MODIFYING_EXISTING_TASK';
export const ALL_TASKS_SERVER = 'ALL_TASKS_SERVER';
export const REMOVE_TASK_INPUT_DELETING = 'REMOVE_TASK_INPUT_DELETING';

type TaskValueAction =(value: string, id: string) =>{
    type : string,
    task: string;
    id: string;
};
export const taskValue: TaskValueAction = (value, id) => {
    return{
       type: TASK_VALUE,
       task: value,
       id,
    }
};

type TaskDeleteAction = (id:string) =>{
    type:string,
    id: string,
};
export const taskDelete : TaskDeleteAction = (id) =>{
    return{
        type: TASK_DELETE,
        id,
    }
};

type EditTaskAction = (task:{name: string, id: string})=>{
    type: string,
    task: {},
};
export const editTask :EditTaskAction =(task) =>{
    return{
        type: EDIT_TASK,
        task,
    }
};

type ModifyingExistingTask = (task:{name: string, id: string}) =>{
    type: string
    task: {}
};
export const modifyingExistingTask: ModifyingExistingTask = (task)=>{
    return{
        type: MODIFYING_EXISTING_TASK,
        task,
    }
};

type AllTasksServer = (tasks:{name: string, id:string}[]) => {
  type: string
  tasks: {name: string, id:string}[]
};
export const allTasksServer: AllTasksServer = (tasks) => {
    return{
        type: ALL_TASKS_SERVER,
        tasks
    }
};




