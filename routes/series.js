let series = require("Router")();
let { getSeries, addSeries } = require("../controllers/series");

series.get("/", getSeries);
series.post("/", addSeries);

module.exports = series;
