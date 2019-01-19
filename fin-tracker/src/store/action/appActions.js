import { appConstants } from '../constants/appConstants';

export function startLoading() {
    return async dispatch => {
        dispatch(start())
    };

    function start() {
        return {
            type: appConstants.START_LOADING
        }
    }
}

export function finishLoading() {
    return async dispatch => {
        dispatch(finish())
    };

    function finish() {
        return {
            type: appConstants.FINISH_LOADING
        }
    }
}