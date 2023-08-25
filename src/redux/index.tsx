import React from 'react';
import {combineReducers} from "redux";
import tasksReducer from "./reducer";

export const rootReducer = combineReducers({
    tasksReducer,
});