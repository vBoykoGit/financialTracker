import { appConstants } from '../constants/appConstants';

const initialState = {};

const app = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case appConstants.START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case appConstants.FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state
    }
}

export default app