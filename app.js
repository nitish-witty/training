const express = require("express");
let app = express();
let route = require("./routes/index");
let bodyParser = require("body-parser");
const model = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(route);

model.sequelize
  // .sync({alter: true})
  // .sync({force: true})
  .authenticate()
  .then(() => {
    console.log("Starting server on 3000");
    return app.listen(3000);
  })
  .catch((err) => {
    console.log("Connection Error: ", err);
  });
