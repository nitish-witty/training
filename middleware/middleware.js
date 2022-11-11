let auth = require("router")();
const client = require("../connection");
const jwt = require("jsonwebtoken");
const {verifyToken, createToken} =require("./utils")

const sessionAuthenticate = async (req, res, next) => {
  try {
  

    const userVer = verifyToken(token)
    console.log(userVer);

    return res.status(200).json({ result: "Token Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {sessionAuthenticate};
