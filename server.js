
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConfig = require('./data/dbConfig')

const authRouter = require('./auth/auth-router');
const RoutesRouter = require('./routes/routes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', RoutesRouter);
server.use('/api/auth', authRouter);


module.exports = server;