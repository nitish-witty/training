const { Client } = require("pg");
const dbConfig = require("./config/default.json");

const client = new Client({
  user: dbConfig.database.user,
  host: dbConfig.database.host,
  database: dbConfig.database.database,
  password: dbConfig.database.password,
  port: dbConfig.database.port
});

client.connect();

module.exports = client;
