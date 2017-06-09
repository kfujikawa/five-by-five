const router = require('express').Router();
const { get } = require('./user.controller');

router.route('/authenticated').get(get);

module.exports = router;
