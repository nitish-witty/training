let user = require("router")();
const client = require("../connection");
const { createToken } = require("../middleware/utils");

const userSignup = async (req, res, next) => {
  try {
    let { userName, email, password } = req.body;
    if (!userName) {
      throw "add userName";
    }
    if (!email) {
      throw "add email";
    }
    if (!password) {
      throw "add password";
    }

    const user = (
      await client.query(
        `SELECT count(email_id) FROM app."user" where email_id = '${email}'; `
      )
    ).rows;
    // console.log("user: ",user)
    let count = user[0].count;
    if (+count > 0) throw "User already exists";

    let newUser =
      await client.query(`INSERT INTO app."user"( name, email_id, password, active)
      VALUES ('${userName}', '${email}', '${password}' , true) RETURNING id`);

    let newUserId = +newUser.rows[0].id;

    const userToken = createToken({ id: newUserId, email: email });

    let newUserSession =
      await client.query(`INSERT INTO app."user_session"( user_id, token, active)
      VALUES (${newUserId}, '${userToken}' , true)`);

    // if (newUser.rowCount == 0) throw "cannot create user";

    return res
      .status(200)
      .json({ result: { userId: newUserId, token: userToken } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = { userSignup };
