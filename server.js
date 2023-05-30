const app = require ("./app");
const model = require("./models");

model.sequelize
  // .sync({alter: true})
  // .sync({ force: true })
  .authenticate()
  // .then(() => model.sequelize.sync({force: true}))
  .then(() => {
    console.log("Starting server on 3000");
    return app.listen(3000);
  })
  .catch((err) => {
    console.log("Connection Error: ", err);
  });