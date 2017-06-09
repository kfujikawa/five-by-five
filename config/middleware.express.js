const bodyParser = require('body-parser');
const path = require('path');

module.exports = app => {
  require('mongoose').Promise = global.Promise;
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
};
