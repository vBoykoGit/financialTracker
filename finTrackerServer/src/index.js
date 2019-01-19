import { setRoutes } from './router';
import { connectToDB } from './database';
import cors from 'cors';
const express = require("express");
const bodyParser = require('body-parser');

const port = 3001;

const app = express();
app.use(cors({
    exposedHeaders: "*"
}));

connectToDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

setRoutes(app)