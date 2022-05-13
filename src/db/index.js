"use strict";
exports.__esModule = true;
exports.db = void 0;
var sequelize_1 = require("sequelize");
// Instance Sequelize SQLite3
exports.db = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./db/database.sqlite"
});
