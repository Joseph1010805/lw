const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  HP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  MP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  STR: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  DEX: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CON: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  WIZ: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTHP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTMP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTSTR: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTDEX: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTCON: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CURRENTWIZ: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Player;
