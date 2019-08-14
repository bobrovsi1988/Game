import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import data from './json/game-of-thrones';
import Reducer from './reducers/Reducer';

const store = createStore(Reducer);
store.dispatch({
    type:"SET_STATE",
    state: data
});

ReactDOM.render((
    <Provider store ={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
