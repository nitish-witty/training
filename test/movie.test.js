const request = require('supertest');
const app = require('../app'); // Assuming the Express app is exported from a separate file

describe('GET /signin', () => {
  it('should return 500 if there is no movie in DB', async () => {
    const response = await request(app)
      .get('/movie/');

    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe("movie is unavailable");
  });
});