const mongoose = require("mongoose");
const uuid = require('uuidv4');
const UUID = require('uuid');
const Schema = mongoose.Schema;

let equipment = new Schema(
  {
    name: {
      type: String
    },
    status: {
      type: Boolean
    },
    description: {
      type: String
    },
    userId: {
      type: UUID, default: uuid
    }
  },
  { collection: "Equipments " }
);

module.exports = mongoose.model("Equipments ", equipment);