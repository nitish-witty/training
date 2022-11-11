let user_series_watched = require("Router")();
let {
  getUserSeries,
  addUserSeries
} = require("../controllers/user_series_watched");

user_series_watched.get("/", getUserSeries);
user_series_watched.post("/", addUserSeries);

module.exports = user_series_watched;
