const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let equipment = new Schema(
  {
    name: {
      type: String
    },
    status: {
      type: Boolean, default: false
    },
    description: {
      type: String
    },
    owner: {
      type: mongoose.ObjectId
    }
  },
  { collection: "Equipments" }
);

module.exports = mongoose.model("Equipments", equipment);