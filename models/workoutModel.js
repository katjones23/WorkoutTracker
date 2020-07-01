const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Enter workout type"
  },
  name: {
    type: String,
    required: "Enter workout name"
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number,
    required: "Enter workout name"
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
