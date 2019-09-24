
const express = require('express');

const cors = require('cors');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConfig = require('./data/dbConfig')


const RoutesRouter = require('./routes/routes-router.js');

const server = express();


server.use(express.json());
server.use(cors());
server.use('/api', RoutesRouter);


module.exports = server;