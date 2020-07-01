const Workout = require("../models/workoutModel");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({
            $push: {
                exercises:
                {
                    type: req.body.type,
                    name: req.body.name,
                    distance: req.body.distance || null,
                    duration: req.body.duration || null,
                    weight: req.body.weight || null,
                    sets: req.body.sets || null,
                    reps: req.body.reps || null
                }
            }
        })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", function (req, res) {
        Workout.update({ _id: req.params.id },
            {
                $push: {
                    exercises:
                    {
                        type: req.body.type,
                        name: req.body.name,
                        distance: req.body.distance || null,
                        duration: req.body.duration || null,
                        weight: req.body.weight || null,
                        sets: req.body.sets || null,
                        reps: req.body.reps || null
                    }
                }
            })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
};
