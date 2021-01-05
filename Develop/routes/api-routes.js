const router = require("express").Router();
const Workout = require("../models/workout");
// const express = require("express");


router.get("/api/workouts", (req, res) => {
  console.log("got to get workouts route");
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
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
  

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(({ error }) => {
        res.json(error);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;