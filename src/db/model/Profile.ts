import Sequelize from "sequelize"
import { db } from ".."

export const Profile = db.define("profile", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
