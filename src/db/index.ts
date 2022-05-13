import { Sequelize } from "sequelize"

// Instance Sequelize SQLite3
export const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
})

