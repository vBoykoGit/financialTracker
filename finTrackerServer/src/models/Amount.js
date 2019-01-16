const mongoose = require('mongoose');

const amountSchema = () => {
    const schema = new mongoose.Schema({
        total: { type: Number, required: true, get: getTotal, set: setTotal }
    });
    schema.set('toObject', { getters: true });
    schema.set('toJSON', { getters: true });
    return schema
}


function getTotal(num) {
    return (num / 100).toFixed(2);
}

function setTotal(num) {
    return num * 100;
}

export const Amount = mongoose.model("Amount", amountSchema());