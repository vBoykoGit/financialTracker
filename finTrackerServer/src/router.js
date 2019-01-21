import { Operation } from './models/Operation';
import { Amount } from './models/Amount';
import { sendOperationsToResponse, calculateDayMonthAmount } from './helpers';

export const setRoutes = (app) => {

    //Operations - get
    app.get("/operations", (req, res) => {
        sendOperationsToResponse(res)
    });

    //Operations - post
    app.post("/addOperation", (req, res) => {
        const operation = new Operation(req.body);
        operation.save().then(item => {
            sendOperationsToResponse(res)
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    app.post("/editOperation", (req, res) => {
        const operationObject = req.body;
        Operation.findByIdAndUpdate(operationObject._id, operationObject, { new: true, useFindAndModify: false }).then(item => {
            sendOperationsToResponse(res)
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    app.post("/deleteOperation", (req, res) => {
        const operationObject = req.body;
        Operation.findByIdAndRemove(operationObject._id).then(item => {
            sendOperationsToResponse(res)
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    //Amount - get
    app.get("/amount", async function (req, res) {
        let amount = await Amount.findOne().exec()
        if (amount) {
            amount = await calculateDayMonthAmount(amount)
            res.send(amount);
        }
        else {
            const error = new Error('Amount not found')
            res.status(400).send({ error: error.toString() });
        }
    });

    //Amount - post
    app.post("/addAmount", async function (req, res) {
        const amountObject = req.body;
        Amount.findOneAndUpdate({}, amountObject, { new: true, upsert: true, setDefaultsOnInsert: true, useFindAndModify: false }).then(async (amount) => {
            if (amount) {
                amount = await calculateDayMonthAmount(amount)
                res.send(amount);
            }
            else {
                const error = new Error('Amount not found')
                res.status(400).send({ error: error.toString() });
            }
        }).catch(err => {
            res.status(400).send(err);
        });
    });
}