let movie = require("router")();
const client = require("../connection");

const getMovies = async (req, res, next) => {
  try {
    let movie = (
      await client.query(
        'SELECT id, name, active, launched_at, duration FROM app."movie" order by id'
      )
    ).rows;

    if (movie.length == 0) {
      throw "movie is unavailable";
    }
    console.log(movie);
    movie = JSON.parse(JSON.stringify(movie));

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addMovie = async (req, res, next) => {
  try {
    let { movieName, rating, launchedAt, duration } = req.body;

    const user = (await client.query('SELECT name FROM app."movie"')).rows;
    let count = user.length;

    if (!movieName) {
      throw "add movieName";
    }
    if (!duration) {
      throw "add duration";
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

    const newMovie =
      await client.query(`INSERT INTO app."movie"(id, name, rating, active, launched_at, duration)
    VALUES (${
      count + 1
    }, '${movieName}', ${rating}, true, '${launchedAt}' , '${duration}')`);

    if (newMovie.rowCount == 0) throw "cannot create movie";

    return res.status(200).json({ message: "Movie successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const updateMovie = async (req, res, next) => {
  try {
    let { active, name, launchedAt, duration } = req.body;

    if (!name) {
      throw "please provide a valid name";
    }

    if (!launchedAt && !duration && !active) {
      throw "please provide data to update like: launchedAt, duration, active";
    }

    active = active ? `active=${active}` : null;
    launchedAt = launchedAt ? `launchedAt='${launchedAt}'` : null;
    duration = duration ? `duration='${duration}'` : null;

    console.log("active: ", active);
    console.log("launchedAt: ", launchedAt);
    console.log("duration: ", duration);

    let updatedData = "";
    updatedData =
      updatedData == ""
        ? active != null
          ? updatedData + active
          : ""
        : active != null
        ? updatedData + " , " + active
        : "";
    updatedData =
      updatedData == ""
        ? launchedAt != null
          ? updatedData.concat(launchedAt)
          : ""
        : launchedAt != null
        ? updatedData.concat(" , ").concat(launchedAt)
        : "";
    updatedData =
      updatedData == ""
        ? duration != null
          ? updatedData.concat(duration)
          : ""
        : duration != null
        ? updatedData.concat(" , ").concat(duration)
        : "";

    console.log("updatedData: ", updatedData);

    // const updatedMovie = await client.query(`UPDATE app.movie
    // SET  ${updatedData}
    // WHERE name='${name}';`)

    // console.log("updatedMovie: ", updatedMovie)
    // if (newMovie.rowCount == 0) throw "cannot update movie";

    return res.status(200).json({ message: "movie updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const deleteMovie = (req, res, next) => {
  try {
    let id = req.body.id;
    if (id == null || id == "" || id == undefined) {
      throw "provide an id";
    }

    arr = arr.filter((obj) => obj.id != id);
    return res.status(200).json(arr);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { addMovie, getMovies, updateMovie, deleteMovie };
