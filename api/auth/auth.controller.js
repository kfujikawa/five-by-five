const User = require('../user/user.model');
const jwt = require('jsonwebtoken');

var controller = {
  login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          const error = new Error('User not found.');
          error.code = 400;
          return next(error);
        }

        if (user.password === password) {
          const filtered_user = {
            id: user.id,
            email: user.email,
            name: user.name
          };

          const token = jwt.sign(filtered_user, 'secret', {
            expiresIn: 60 * 60
          });
          return res.status(200).json({ token });
        }
      })
      .catch(error => next(error));
  },
  register(req, res, next) {
    User.create(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => next(error));
  }
};
module.exports = controller;
