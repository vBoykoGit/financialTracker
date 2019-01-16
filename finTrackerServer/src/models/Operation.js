const mongoose = require('mongoose');

const operationSchema = () => {
    const schema = new mongoose.Schema({
        sum: { type: Number, required: true, get: getSum, set: setSum },
        date: { type: Date, required: true }
    });
    schema.set('toObject', { getters: true });
    schema.set('toJSON', { getters: true });
    return schema
}

function getSum(num) {
    return (num / 100).toFixed(2);
}

function setSum(num) {
    return num * 100;
}

export const Operation = mongoose.model("Operation", operationSchema());
