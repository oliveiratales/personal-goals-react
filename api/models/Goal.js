const mongoose = require("mongoose");

const { Schema } = mongoose;

// Model
const goalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    initialDate: {
      type: String,
      required: true,
    },
    finalDate: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;