let auth = require("router")();
const client = require("../connection");
const jwt = require("jsonwebtoken");

auth.get("/auth", async (req, res) => {
  try {
    const token = jwt.sign(
      {
        name: "nitish"
      },
      "mynameisnitishanand",
      { expiresIn: "1h" }
    );
    console.log(token);

    const userVer = jwt.verify(token, "mynameisnitishanand");
    console.log(userVer);

    return res.status(200).json({ result: "Token Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

module.exports = auth;
