import { amountConstants } from '../constants/amountConstants';

const initialState = {isAmount: true};

const amount = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case amountConstants.GET_AMOUNT:
            return state;
        case amountConstants.SET_AMOUNT:
            const { amount, amountDay, amountMonth } = action
            const isAmount = amount ? true : false
            if (isAmount) {
                return {
                    amount,
                    amountDay,
                    amountMonth,
                    isAmount
                }
            } else {
                return {
                    isAmount
                }
            }
        default:
            return state
    }
}

export default amount