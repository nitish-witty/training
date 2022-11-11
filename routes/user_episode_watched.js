let user_episode_watched = require("Router")();
let {
  getUserEpisode,
  addUserEpisode
} = require("../controllers/user_episode_watched");

user_episode_watched.get("/", getUserEpisode);
user_episode_watched.post("/", addUserEpisode);

module.exports = user_episode_watched;
