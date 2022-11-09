var router = require("router");
var route = router();
const movie = require("./movie");
const series = require("./series");
const episodes = require("./episodes");

const auth = require("./authenticate");
// route.get("/ping", function (request, response) {
//     response.writeHead(200);
//     response.write("pong");
//     response.end();
//   });

route.use("/movie", movie);
route.use("/series", series);
route.use("/episodes", episodes);
route.use("/auth", auth);
module.exports = route;
