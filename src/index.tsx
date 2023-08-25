import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailedTask from './DetailedTask';
import {rootReducer} from "./redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />} />
                <Route path={'/task/:id'} element={<DetailedTask/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);


