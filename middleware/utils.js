const jwt = require("jsonwebtoken");


const createToken = () => {
    return jwt.sign(
        {
          name: "nitish"
        },
        "mynameisnitishanand",
        { expiresIn: "1h" }
      );
}

const verifyToken = (token)=>{
    return jwt.verify(token, "mynameisnitishanand");
}

module.exports = {createToken, verifyToken}