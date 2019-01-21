import { operationConstants } from '../constants/operationConstants';
import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { startLoading, finishLoading } from './appActions';
import { getAmount } from './amountActions';

export function getOperations() {
    return async dispatch => {
        dispatch(startLoading())
        fetchThenProcess('/operations', 'GET')
            .then((response) => {
                parseAndHandleOperations(response, dispatch)
                dispatch(finishLoading())
            })
    };
}

export function newOperation(sum) {
    return async dispatch => {
        console.log(sum);

        dispatch(startLoading())
        fetchThenProcess('/addOperation', 'POST', JSON.stringify({
            sum,
            date: new Date()
        })).then((response) => {
            parseAndHandleOperations(response, dispatch)
            dispatch(finishLoading())
        })
    };
}

export function deleteOperation(operation) {
    return async dispatch => {
        dispatch(startLoading())
        fetchThenProcess('/deleteOperation', 'POST', JSON.stringify(operation))
            .then((response) => {
                parseAndHandleOperations(response, dispatch)
                dispatch(finishLoading())
            })
    };
}

const parseAndHandleOperations = (response, dispatch) => {
    const operations = _.get(response, 'operations')
    dispatch(setOperations(operations))
    dispatch(getAmount())
}

const setOperations = (operations = []) => {
    return {
        type: operationConstants.SET_OPERATIONS,
        operations
    }
}