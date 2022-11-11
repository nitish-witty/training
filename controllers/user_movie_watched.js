let user_movie_watched = require("router")();
const client = require("../connection");

const getUserMovie = async (req, res) => {
  try {
    let user_movie_watched = (
      await client.query(
        'SELECT  id, user_id, movie_id, liked, rating, user_comment, is_completed, completed_at FROM app."user_movie_watched" order by id'
      )
    ).rows;

    if (user_movie_watched.length == 0) {
      throw "Data is unavailable";
    }
    console.log(user_movie_watched);
    user_movie_watched = JSON.parse(JSON.stringify(user_movie_watched));

    return res.status(200).json(user_movie_watched);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addUserMovie = async (req, res) => {
  try {
    let {
      userId,
      movieId,
      liked,
      rating,
      userComment,
      isCompleted,
      completedAt
    } = req.body;

    const user = (await client.query('SELECT id FROM app."user_movie_watched"'))
      .rows;
    let count = user.length;

    if (!userId) {
      throw "add userId";
    }
    if (!movieId) {
      throw "add movieId";
    }
    if (!liked) {
      throw "add liked";
    }
    if (!rating) {
      throw "add rating";
    }
    if (!userComment) {
      throw "add Comment";
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
      await client.query(`INSERT INTO app."user_movie_watched"(id, user_id, movie_id, liked, rating, user_comment, is_completed, completed_at)
    VALUES (${
      count + 1
    }, ${userId}, ${movieId}, '${liked}', ${rating}, '${userComment}', '${isCompleted}', '${completedAt}')`);

    console.log(newUser);

    if (newUser.rowCount == 0) throw "User cannot be added";

    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getUserMovie, addUserMovie };
