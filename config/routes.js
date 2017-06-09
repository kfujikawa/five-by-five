const rootRouter = require('../api/root/root.router');
const goalRouter = require('../api/goal/goal.router');
const userRouter = require('../api/user/user.router');
const authRouter = require('../api/auth/auth.router');
const jwt = require('express-jwt');
const errors = require('./errors');
const path = require('path');

module.exports = app => {
  app.use('/auth', authRouter);
  app.use('/api/goals', jwt({ secret: 'secret' }), goalRouter);
  app.use('/api/users', jwt({ secret: 'secret' }), userRouter);
  app.all('*', (req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
  });
  app.use(errors);
};
