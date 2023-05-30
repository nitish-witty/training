const jwt = require("jsonwebtoken");
const dbConfig = require("../config/config.json");

const createToken = ({ id, email }) => {
  return jwt.sign(
    {
      userId: id,
      email: email
    },
    dbConfig.app.secretKey,
    { expiresIn: dbConfig.app.jwtTokenExpire }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, dbConfig.app.secretKey);
};

const getToken = (req) => {
  try {
    console.log("header: ", req.headers);
    let headers = req.headers["x-access-token"] || req.headers["authorization"];
    if (headers && headers.startsWith("Bearer ")) {
      let token = headers.slice(7);
      return token;
    } else {
      throw "Invalid token";
    }
  } catch (error) {
    throw "Invalid token";
  }
};

module.exports = { createToken, verifyToken, getToken };
