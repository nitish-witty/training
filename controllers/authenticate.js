let auth = require("router")();
const client = require("../connection");

auth.get("/auth", async (req, res) => {
  try {

    return res.status(200).json({result: "jwt token"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});
module.exports = auth;
