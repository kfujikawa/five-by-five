const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');

const expect = chai.expect;

const Goal = require('../api/goal/goal.model');
const User = require('../api/user/user.model');
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL } = require('../config/config');

chai.use(chaiHttp);

function generateGoalData() {
  return {
    name: faker.random.words(),
    type: 'career',
    isChecked: faker.random.boolean()
  };
}

function authenticate(callback) {
  chai
    .request(app)
    .post('/auth/login')
    .send({ email: 'test', password: 'test' })
    .then(function(res) {
      console.log('trying to log in');
      callback(res.body.token);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function seedGoalData() {
  const seedData = [];

  for (let i = 1; i < 3; i++) {
    seedData.push(generateGoalData());
  }

  return Goal.create(seedData);
}

function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

describe('API Tests for Goals', function() {
  let token = '';
  before(function() {
    User.create({ email: 'test', password: 'test', name: 'test' });
    return runServer(TEST_DATABASE_URL);
  });

  after(function() {
    tearDownDb();

    return closeServer();
  });

  it('should create a goal', function(done) {
    authenticate(token => {
      const newGoal = generateGoalData();
      return chai
        .request(app)
        .post('/api/goals')
        .set('Authorization', 'bearer ' + token)
        .send(newGoal)
        .then(function(res) {
          expect(res.status).to.equal(200);
          expect(res.body[0].name).to.equal(newGoal.name);
          done();
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  });

  it('should return a 200 status code and HTML on GET', function() {
    return chai
      .request(app)
      .get('/')
      .then(function(res) {
        expect(res.status).to.equal(200);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
