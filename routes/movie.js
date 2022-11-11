let movie = require("Router")();
let {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie
} = require("../controllers/movie");

movie.get("/", getMovies);
movie.post("/", addMovie);
movie.put("/", updateMovie);
movie.delete("/", deleteMovie);

module.exports = movie;
