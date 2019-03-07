const express = require('express');
const server = express();

//Middleware
server.use(express.json());

//Routes
const userRouter = require('./user/user');
server.use('/user', userRouter);

server.get('/', async (req, res) => {
  res.status(200).json({api: 'up'});
});

module.exports = server;
