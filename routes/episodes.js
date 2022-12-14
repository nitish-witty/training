let episodes = require("Router")();
let { getEpisodes, addEpisodes } = require("../controllers/episodes");
let { sessionAuthenticate } = require("../middleware/middleware");

episodes.get("/", getEpisodes);
episodes.post("/", sessionAuthenticate, addEpisodes);

module.exports = episodes;
