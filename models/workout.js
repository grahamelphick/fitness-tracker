const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is required",
        },
        name: {
          type: String,
          trim: true,
          required: "Exerise name is required",
        },
        duration: {
          type: Number,
          required: "Exercise duration is required",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration;
  }
  return total;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
