let user = require("Router")();
let { userSignup } = require("../controllers/user");
let { sessionAuthenticate } = require("../middleware/middleware");

user.post("/signup", userSignup);
user.get("/", sessionAuthenticate);

module.exports = user;
