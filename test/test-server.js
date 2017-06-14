const mocha = require('mocha');
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');
const faker = require('faker');

const should = chai.should();
const expect = chai.expect;

const Goal = require('../api/goal/goal.model');
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL } = require('../config/config');

chai.use(chaiHttp);

//Seeding fake data to db

function generateGoalData() {
  return {
    name: faker.random.words(),
    type: "Career",
    isChecked: faker.random.boolean()
  };
}

function seedGoalData() {
  console.info('Seeding goal data');
  const seedData = [];

  for (let i = 1; i < 3; i++) {
    seedData.push(generateGoalData());
  }
  console.log(seedData);

  return Goal.create(seedData);
}

function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

describe("API Tests for Goals", function () {
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  beforeEach(function() {
    return seedGoalData();
  });

  afterEach(function() {
    return tearDownDb();
  });

  after(function() {
    return closeServer();
  });

  it('should create a goal', function() {
    const newGoal = generateGoalData();

    console.log('cool story bro');

    return chai.request(app).post('api/goals').send(newGoal).then(function(res) {
      res.should.have.status(201);
      res.should.be.json;
      res.should.be.a('Object');
      res.body.name.should.equal(newGoal.name);
      console.log(newGoal.name);
      res.body.name.should.be.a('String');
      expect(res.body.name.length).to.be.at.least(1);
      expect(res.body.name.length).to.be.below(40);
    });
  });

  it("should return a 200 status code and HTML on GET", function () {
    return chai.request(app)
      .get("/")
      .then(function(res){
        res.should.have.status(200);
        res.should.be.html;
    });
  });
});