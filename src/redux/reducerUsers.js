import {
   ADD_USERS, DELETE_USER,
} from "./actionUsers";

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users,{name: action.users.name, id: action.users.id}]
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id)
            }
        default:
            return  state
    }
};

export default usersReducer;