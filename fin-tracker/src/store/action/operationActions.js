import { operationConstants } from '../constants/operationConstants';

export function get() {
    return async dispatch => {
        dispatch(getOperations())
    };

    function getOperations() {
        return {
            type: operationConstants.GET_OPERATIONS
        }
    }
}

export function set(amount) {
    return async dispatch => {
        dispatch(setOperations(amount))
    };

    function setOperations(amount) {
        return {
            type: operationConstants.ADD_OPERATIONS,
            amount
        }
    }
}