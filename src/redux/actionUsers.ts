export const ADD_USERS = 'ADD_USERS';
export const DELETE_USER = 'DELETE_USER';

type AddUsers = (name: string, id: string) => {
    type: string,
    users: {name: string, id: string}
}

export const addUsers : AddUsers = (name, id) => {
    return{
        type: ADD_USERS,
        users: {name, id}
    }
}

type DeleteUser = (id: string) => {
    type: string,
    id: string,
}

export const deleteUser : DeleteUser = (id) => {
    return{
        type: DELETE_USER,
        id
    }
}