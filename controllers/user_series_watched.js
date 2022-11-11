let user_series_watched = require("router")();
const client = require("../connection");

const getUserSeries = async (req, res, next) => {
  try {
    let user_series_watched = (
      await client.query(
        'SELECT  id, user_id, series_id, liked, rating, user_comment, is_completed, completed_at FROM app."user_series_watched" order by id'
      )
    ).rows;

    if (user_series_watched.length == 0) {
      throw "Data is unavailable";
    }
    console.log(user_series_watched);
    user_series_watched = JSON.parse(JSON.stringify(user_series_watched));

    return res.status(200).json(user_series_watched);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addUserSeries = async (req, res, next) => {
  try {
    let {
      userId,
      seriesId,
      liked,
      rating,
      userComment,
      isCompleted,
      completedAt
    } = req.body;

    const user = (
      await client.query('SELECT id FROM app."user_series_watched"')
    ).rows;
    let count = user.length;

    if (!userId) {
      throw "add userId";
    }
    if (!seriesId) {
      throw "add seriesId";
    }
    if (!liked) {
      throw "add liked";
    }
    if (!rating) {
      throw "add rating";
    }
    if (!userComment) {
      throw "add comment";
    }
    if (!isCompleted) {
      throw "add isCompleted";
    }
    if (!completedAt) {
      throw "add completedAt";
    }
    if (completedAt) {
      completedAt = new Date(completedAt).toISOString();
    }

    const newUser =
      await client.query(`INSERT INTO app."user_series_watched"(id,user_id, series_id, liked, rating, user_comment, is_completed, completed_at)
    VALUES (${
      count + 1
    }, ${userId}, ${seriesId}, '${liked}', ${rating}, '${userComment}', '${isCompleted}', '${completedAt}')`);

    console.log(newUser);

    if (newUser.rowCount == 0) throw "User cannot be added";

    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getUserSeries, addUserSeries };
