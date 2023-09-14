import React from 'react';
import {combineReducers} from "redux";
import tasksReducer from "./reducer";
import usersReducer from './reducerUsers'

export const rootReducer = combineReducers({
    tasksReducer,
    usersReducer
});