import { Operation } from './models/Operation';
import { Amount } from './models/Amount';

export const setRoutes = (app) => {

    //Operations - get
    app.get("/operations", (req, res) => {
        Operation.find().then(operations => {
            res.send(operations);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    //Operations - post
    app.post("/addOperation", (req, res) => {
        const operation = new Operation(req.body);
        operation.save().then(item => {
            res.send(item);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    app.post("/editOperation", (req, res) => {
        const operationObject = req.body;
        Operation.findByIdAndUpdate(operationObject._id, operationObject, { new: true, useFindAndModify: false }).then(item => {
            res.send(item);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    app.post("/deleteOperation", (req, res) => {
        const operationObject = req.body;
        Operation.findByIdAndRemove(operationObject._id).then(item => {
            res.send(item);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    //Amount - get
    app.get("/amount", (req, res) => {
        Amount.findOne().then(amount => {
            res.send(amount);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });

    //Amount - post
    app.post("/addAmount", (req, res) => {
        const amountObject = req.body;
        Amount.findOneAndUpdate({}, amountObject, { new: true, upsert: true, setDefaultsOnInsert: true, useFindAndModify: false }).then(item => {
            res.send(item);
        }).catch(err => {
            res.status(400).send(err.errors);
        });
    });
}