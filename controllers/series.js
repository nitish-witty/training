let series = require("router")();
const client = require("../connection");

const getSeries = async (req, res, next) => {
  try {
    let series = (
      await client.query(
        'SELECT id, name, episodes, active, launched_at FROM app."series" order by id'
      )
    ).rows;

    if (series.length == 0) {
      throw "series is unavailable";
    }
    console.log(series);
    series = JSON.parse(JSON.stringify(series));

    return res.status(200).json(series);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addSeries = async (req, res, next) => {
  try {
    let { seriesName, rating, launchedAt, episodes } = req.body;

    const user = (await client.query('SELECT name FROM app."series"')).rows;
    let count = user.length;

    if (!seriesName) {
      throw "add seriesName";
    }
    if (!episodes) {
      throw "add episodes";
    }
    if (!rating) {
      throw "add rating";
    }
    if (!launchedAt) {
      throw "add launchedAt";
    }
    if (launchedAt) {
      launchedAt = new Date(launchedAt).toISOString();
    }

    const newSeries =
      await client.query(`INSERT INTO app."series"(id, name, rating, active, launched_at, episodes)
    VALUES (${
      count + 1
    }, '${seriesName}', ${rating}, true, '${launchedAt}' , '${episodes}')`);

    if (newSeries.rowCount == 0) throw "cannot create series";

    return res.status(200).json({ message: "Series successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getSeries, addSeries };
