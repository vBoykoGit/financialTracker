import { amountConstants } from '../constants/amountConstants';
import { fetchThenProcess } from '../fetcher';
import _ from 'lodash'
import { startLoading, finishLoading } from './appActions';

export function getAmount() {
    return async dispatch => {
        dispatch(startLoading())
        fetchThenProcess('/amount', 'GET')
            .then((response) => {
                const amount = _.get(response, 'total')
                const amountDay = _.get(response, 'amountDay')
                const amountMonth = _.get(response, 'amountMonth')
                dispatch(setAmount(amount, amountDay, amountMonth))
                dispatch(finishLoading())
            })
    };

    function setAmount(amount, amountDay, amountMonth) {
        return {
            type: amountConstants.SET_AMOUNT,
            amount,
            amountDay,
            amountMonth
        }
    }
}

export function setAmount(amount) {
    return async dispatch => {
        console.log(amount);

        dispatch(startLoading())
        fetchThenProcess('/addAmount', 'POST', JSON.stringify({
            total: amount
        })).then((response) => {
            const amount = _.get(response, 'total')
            const amountDay = _.get(response, 'amountDay')
            const amountMonth = _.get(response, 'amountMonth')
            dispatch(setAmount(amount, amountDay, amountMonth))
            dispatch(finishLoading())
        })
    };

    function setAmount(amount, amountDay, amountMonth) {
        return {
            type: amountConstants.SET_AMOUNT,
            amount,
            amountDay,
            amountMonth
        }
    }
}