const mongoose = require("mongoose");
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
      type: Boolean, default: true
    }
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", user);