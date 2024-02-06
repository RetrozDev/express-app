const request = require('supertest');
const app =require('./app')

describe('GET /api/movies/:id', () => {
  it('should return status 200 for movie with id 1', (done) => {
    request(app)
      .get('/api/movies/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return JSON format for movie with id 1', (done) => {
    request(app)
      .get('/api/movies/1')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return status 404 for movie with id 0', (done) => {
    request(app)
      .get('/api/movies/0')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
