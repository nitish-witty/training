let user_movie_watched = require("Router")();
let {
  getUserMovie,
  addUserMovie
} = require("../controllers/user_movie_watched");

user_movie_watched.get("/", getUserMovie);
user_movie_watched.post("/", addUserMovie);

module.exports = user_movie_watched;
