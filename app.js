process.env.NODE_ENV = process.env.NODE_ENV || "development";
require("app-module-path").addPath(__dirname);
const config = require("./config/config");
const app = require("./config/koa")();
require("./config/database.js")(config.db);

const server = app.listen(5000);

console.log("Koa Server listening on port: " + server.address().port);

// For testing with Mocha
module.exports = app;
