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

describe("Goal List", function(){

  it("should return a 200 status code and HTML on GET", function(){
    return chai.request(app)
      .get("/")
      .then(function(res){
        res.should.have.status(200);
        res.should.be.html;
      });
  });
});