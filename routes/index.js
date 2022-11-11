var router = require("router");
var route = router();
const movie = require("./movie");
const series = require("./series");
const episodes = require("./episodes");
const user_episode_watched = require("./user_episode_watched");
const user_movie_watched = require("./user_movie_watched");
const user_series_watched = require("./user_series_watched");

// const auth = require("./authenticate");

// route.get("/ping", function (request, response) {
//     response.writeHead(200);
//     response.write("pong");
//     response.end();
//   });

route.use("/movie", movie);
route.use("/series", series);
route.use("/episodes", episodes);
route.use("/user_episode_watched", user_episode_watched);
route.use("/user_movie_watched", user_movie_watched);
route.use("/user_series_watched", user_series_watched);

// route.use("/auth", auth);

module.exports = route;
