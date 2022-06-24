("use strict");

const {
  db,
  models: { Player },
} = require("../server/db");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 *
 *
 */

const createPlayer = async () => {
  await Player.create({
    Name: "Lone Wolf",
    HP: 10,
    MP: 10,
    STR: 10,
    DEX: 10,
    CON: 10,
    WIZ: 10,
    CURRENTHP: 10,
    CURRENTMP: 10,
    CURRENTSTR: 10,
    CURRENTDEX: 10,
    CURRENTCON: 10,
    CURRENTWIZ: 10
  })
}
