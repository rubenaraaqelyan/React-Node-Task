import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './store/reducers';
import createSageMiddleware from 'redux-saga';
import watchers from "./store/sagas";
import {Provider} from 'react-redux';
import Modal from 'react-modal'

import './index.css';


Modal.setAppElement(document.body)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saga = createSageMiddleware();

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga)),
);

saga.run(watchers)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)
