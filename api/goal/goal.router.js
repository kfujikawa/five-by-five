const router = require('express').Router();
const Controller = require('./goal.controller');
const { get, create, update, remove } = Controller;

router
  .route('/') // /goals
  .get(get)
  .post(create);

router
  .route('/:id') // /goals
  .put(update)
  .delete(remove);

module.exports = router;
