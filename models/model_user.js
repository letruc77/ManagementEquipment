const mongoose = require("mongoose");
const uuid = require('uuid');
const Schema = mongoose.Schema;

let user = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    fullName: {
      type: String
    },
    isActive: {
        type: Boolean
    }
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", user);