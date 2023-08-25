export type ReduxState = {
    tasksReducer:{
        task: {name: string, id: string}[];
        editTask : {name: string, id: string}
    }
};
