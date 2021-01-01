const Workout = require("../models/workout");
const express = require("express");
const app = express();

app.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
         
        { $push: {exercises: body} },
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((error) => {
        res.json(error);
    });
});
  

app.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(({ error }) => {
        res.json(error);
    });
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});