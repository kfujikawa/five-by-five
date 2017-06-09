const router = require('express').Router();
const { rootHandler } = require('./root.controller');

router.route('/').get(rootHandler);

module.exports = router;
