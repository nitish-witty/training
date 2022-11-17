let auth = require("router")();
const client = require("../connection");
const jwt = require("jsonwebtoken");
const { verifyToken, createToken, getToken } = require("./utils");

const sessionAuthenticate = async (req, res, next) => {
  try {
    const token = getToken(req);
    const data = verifyToken(token);
    if (data && data.email) {
      console.log(data);
      // Some process w.r.t usr data
      next();
    } else {
      throw "Invalid token";
    }

    // return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error });
  }
};

module.exports = { sessionAuthenticate };
