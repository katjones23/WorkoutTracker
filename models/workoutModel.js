const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
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
        }
    ],
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
