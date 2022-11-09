const express = require("express");
let app = express();
let route = require("./controllers/index");
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(route);

app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT: 3000");
});
