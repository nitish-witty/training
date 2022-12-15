const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const dbConfig = require("../config/default.json");
const { database, user, password, ...dbConfiguration } = dbConfig.database;
const { createNamespace } = require("cls-hooked");
const cls = createNamespace("ns_movie");
Sequelize.useCLS(cls);

const sequelize = new Sequelize(database, user, password, {
  logging: false,
  ...dbConfiguration
});

let db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
