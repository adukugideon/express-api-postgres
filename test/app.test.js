const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/connection');

const app = require('../app');


describe('Categories', () => {

  it('Lists all categories', (done) => {
    request(app)
      .get('/api/v1/categories')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        done();
      });
  });


});
