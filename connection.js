const { Client } = require("pg");
const env = process.env.NODE_ENV || "development";
const dbConfig = require("./config/config.json");
const { database, user, password, host, port } = dbConfig[env];

const client = new Client({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port
});

client.connect();

module.exports = client;
