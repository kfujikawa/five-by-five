const User = require('./user.model');
const jwt = require('jsonwebtoken');

const Controller = {
  get(req, res, next) {
    User.findOne({ _id: req.user.id })
      .select('-password')
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => next(error));
  },

  register(req, res, next) {
    User.findOne({ _id: req.user.id })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => next(error));
  }
};

module.exports = Controller;
