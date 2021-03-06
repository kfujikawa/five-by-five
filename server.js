const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const { PORT, DATABASE_URL } = require('./config/config');

app.use('/css', express.static(path.resolve(__dirname, './public/assets/css')));

app.use(
  '/images',
  express.static(path.resolve(__dirname, './public/assets/images'))
);

app.use('/js', express.static(path.resolve(__dirname, './public/bundles')));

require('./config/middleware.express')(app);

require('./config/routes')(app);

app.all('*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = {
  app,
  runServer,
  closeServer
};