import moment from 'moment'
import { Operation } from './models/Operation';

export const todayOperationsSum = async function () {
    const start = moment().startOf('day').toDate();
    const end = moment().endOf('day').toDate();
    const operations = await Operation.find({ date: { $gte: start, $lt: end } }).exec()
    return operations ? operations.map(item => parseFloat(item.sum)).reduce((a, b) => a + b, 0) : 0
}

export const monthOperationsSum = async function () {
    const start = moment().startOf('month').toDate();
    const end = moment().endOf('month').toDate();
    const operations = await Operation.find({ date: { $gte: start, $lt: end } }).exec()
    return operations !== null ? operations.map(item => parseFloat(item.sum)).reduce((a, b) => a + b, 0) : 0
}

export const dayAmount = async (amount) => {
    const daySum = await todayOperationsSum()
    const daysInMonth = moment().daysInMonth()
    return parseFloat(amount / daysInMonth) + daySum
}

export const monthAmount = async (amount) => {
    const monthSum = await monthOperationsSum()
    return parseFloat(amount) + monthSum
}

export const calculateDayMonthAmount = async (amount) => {
    const amountMonth = await monthAmount(amount.total)
    const amountDay = await dayAmount(amount.total)
    amount.amountMonth = amountMonth.toFixed(2)
    amount.amountDay = amountDay.toFixed(2)

    return amount
}

export const sendOperationsToResponse = (res) => {
    Operation.find().sort('-date').then(operations => {
        res.send({ operations });
    }).catch(err => {
        res.status(400).send(err.errors);
    });
}