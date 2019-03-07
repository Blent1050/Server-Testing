const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('Route -> /', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
    it('should return { api: "up" }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({api: 'up'});
    });
  });
  describe('users.js', () => {
    describe('Route -> /users ', () => {
      it('should return 200 OK', async () => {
        const res = await request(server).get('/user');
        expect(res.status).toBe(200);
      });

      it('should return JSON', async () => {
        const res = await request(server).get('/user');
        expect(res.type).toBe('application/json');
      });
      it('should return { api: "brandon" }', async () => {
        const res = await request(server).get('/user');
        expect(res.body).toEqual({user: 'brandon'});
      });
    });
  });
});
