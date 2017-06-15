const Goal = require('./goal.model');

let Controller = {};

Controller = {
  get(req, res, next) {
    Goal.find({ _user: req.user.id })
      .select('name type _id isChecked')
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(error => next(error));
  },

  create(req, res, next) {
    let goal = req.body;
    goal._user = req.user.id;
    Goal.create(goal)
      .then(goal => {
        Goal.find({}).then(goals => res.status(200).json(goals));
      })
      .catch(error => next(error));
  },

  update(req, res, next) {
    console.log(req.body);
    Goal.findByIdAndUpdate(req.params.id, req.body)
      .then(goal => {
        res.status(201).json(goal);
      })
      .catch(error => next(error));
  },

  remove(req, res, next) {
    console.log(req.params);
    Goal.findByIdAndRemove({ _id: req.params.id })
      .then(goal => {
        res.sendStatus(204);
      })
      .catch(error => next(error));
  }
};

module.exports = Controller;
