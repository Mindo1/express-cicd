const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with 200 and HTML content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });
});
