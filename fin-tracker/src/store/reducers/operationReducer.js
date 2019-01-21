import { operationConstants } from '../constants/operationConstants';

const initialState = { operations: [] };

const operation = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case operationConstants.SET_OPERATIONS:
            const { operations } = action
            return {
                ...state,
                operations
            };
        default:
            return state
    }
}

export default operation