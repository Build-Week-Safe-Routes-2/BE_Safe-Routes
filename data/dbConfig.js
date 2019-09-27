const knex = require('knex');

const secrets = require('./secrets')

const environment = process.env.DB_ENV || 'development';
const knexConfig = require('../knexfile.js')[environment]



module.exports = knex(knexConfig);