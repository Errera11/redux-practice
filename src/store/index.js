import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import {workersWatcher} from "../redux-saga/watchers/workersWathcer";
import {rootWatcher} from "../redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        cash: cashReducer,
        customers: customerReducer
    }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootWatcher);