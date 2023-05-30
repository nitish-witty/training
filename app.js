const express = require("express");
let app = express();
let route = require("./routes/index");
let bodyParser = require("body-parser");
const model = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(route);

module.exports = app;
