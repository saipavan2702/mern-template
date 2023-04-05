const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    text: { type: String, required: [true, "Please add text value"] },
  },
  { timestamps: true },
  { collection: "goals" }
);

module.exports = mongoose.model("Goals", User);
