let episodes = require("Router")();
let { getEpisodes, addEpisodes } = require("../controllers/episodes");

episodes.get("/", getEpisodes);
episodes.post("/", addEpisodes);

module.exports = episodes;
