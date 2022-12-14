let episodes = require("router")();
const client = require("../connection");
const { getAllEpisodes } = require("../services/episodes");

const getEpisodes = async (req, res, next) => {
  try {
    // let episodes = (
    //   await client.query(
    //     'SELECT id, name, active, duration, launched_at FROM app."episodes" order by id'
    //   )
    // ).rows;

    let episodes = await getAllEpisodes();

    if (episodes.length == 0) {
      throw "episodes is unavailable";
    }
    console.log(episodes);
    episodes = JSON.parse(JSON.stringify(episodes));

    return res.status(200).json(episodes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addEpisodes = async (req, res, next) => {
  try {
    let { episodeName, rating, duration, launchedAt } = req.body;

    const user = (await client.query('SELECT name FROM app."episodes"')).rows;
    let count = user.length;

    if (!episodeName) {
      throw "add episodeName";
    }
    if (!rating) {
      throw "add rating";
    }
    if (!duration) {
      throw "add duration";
    }
    if (!launchedAt) {
      throw "add launchedAt";
    }
    if (launchedAt) {
      launchedAt = new Date(launchedAt).toISOString();
    }

    const newEpisode =
      await client.query(`INSERT INTO app."episodes"(id, name, rating, active, duration, launched_at, series_id)
    VALUES (${
      count + 1
    }, '${episodeName}', ${rating}, true, '${duration}', '${launchedAt}', 3 )`);

    if (newEpisode.rowCount == 0) throw "cannot create episode";

    return res.status(200).json({ message: "Episode successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getEpisodes, addEpisodes };
