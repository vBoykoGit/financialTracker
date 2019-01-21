import moment from 'moment';
import { monthOperationsSum, todayOperationsSum } from '../helpers';

const mongoose = require('mongoose');

const amountSchema = () => {
    const schema = new mongoose.Schema({
        total: { type: Number, required: true, get: getNumber, set: setNumber },
        amountMonth: { type: Number },
        amountDay: { type: Number }
    }, {
            toObject: { getters: true, virtuals: true },
            toJSON: { getters: true, virtuals: true }
        });
    return schema
}

function getNumber(num) {
    return (num / 100).toFixed(2);
}

function setNumber(num) {
    return num * 100;
}

export const Amount = mongoose.model("Amount", amountSchema());