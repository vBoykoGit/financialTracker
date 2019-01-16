import { setRoutes } from './router';
import { connectToDB } from './database';
const express = require("express");
const bodyParser = require('body-parser');

const port = 3001;

const app = express();
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