const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
  },
  { timestamps: true },
  { collections: "users" }
);

module.exports = mongoose.model("Users", User);
