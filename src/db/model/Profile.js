"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var sequelize_1 = require("sequelize");
var __1 = require("..");
exports.Profile = __1.db.define("profile", {
    id: {
        type: sequelize_1["default"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    }
});
