var db = require("../models/workout.js");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", function(req, res) {
    db.create({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.updateOne(
      { _id: req.params.id },
      { rating: req.body.rating }
    ).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};
