let user = require("router")();
const client = require("../connection");

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

    const newUser =
      await client.query(`INSERT INTO app."user"(id, name, email_id, password, active)
      VALUES ('${userName}', '${email}', '${password}' , true)`);

    // if (newUser.rowCount == 0) throw "cannot create user";

    return res.status(200).json({ message: "User successfully created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = { userSignup };
