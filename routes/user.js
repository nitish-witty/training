let user = require("Router")();
let { userSignup } = require("../controllers/user");
let { sessionAuthenticate } = require("../middleware/middleware");

user.post("/signup", userSignup);

module.exports = user;
