'use strict';

//
// dependencies
const chai  = require('chai');
const faker = require('faker');

//
// running local
if(process.env.NODE_ENV === 'local') {
  const path      = require('path');
  var dotEnvPath  = path.resolve('.env');
  require('dotenv').config({ path: dotEnvPath});
}

//
// controller
const handler = require('../src/controllers/_handler');

const sample = {
  name: `Test ${faker.random.word()}`,
};

describe('01 Test Case sample through endpoint /', () => {
  it('Should return status 200.', (done) => {
    const event = {
      body: JSON.stringify(sample)
    };
    handler.sample(event,{})
      .then(res => {
        chai.expect(res.statusCode).eq(200);
        done();
      }).catch(err => {
        return done(err);
      });
  });

});