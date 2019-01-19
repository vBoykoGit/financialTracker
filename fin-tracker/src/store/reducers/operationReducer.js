import { operationConstants } from '../constants/operationConstants';

const initialState = { operations: [] };

const operation = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case operationConstants.GET_OPERATIONS:
            const { operations } = action
            return {
                ...state,
                operations
            };
        case operationConstants.ADD_OPERATIONS:
            return state
        case operationConstants.EDIT_OPERATIONS:
            return state
        case operationConstants.DELETE_OPERATIONS:
            return state
        default:
            return state
    }
}

export default operation