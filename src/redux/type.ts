export type ReduxState = {
    tasksReducer:{
        task: {name: string, id: string, idUser: string | null}[];
        editTask : {name: string, id: string};
    };
    usersReducer:{
        users : {name: string, id: string}[]
    }
};

