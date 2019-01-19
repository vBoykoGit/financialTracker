import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk'
import {
    createLogger
} from 'redux-logger'
import amount from './reducers/amountReducer';
import operation from './reducers/operationReducer';
import app from './reducers/appReducer';

let console = window.console;

const loggerMiddleware = createLogger();

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
};

const middleware = () => [
    thunk,
    loggerMiddleware,
    saver,
]

const storeFactory = (initialState = {}) => {
    const store = applyMiddleware(...middleware())(createStore)(combineReducers({
        amount,
        operation,
        app
    }), initialState);
    return store
}

export default storeFactory;