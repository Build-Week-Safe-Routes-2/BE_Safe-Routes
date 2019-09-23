const knex = require('knex');

const secrets = require('../data/secrets.js')

const environment = secerts.environment || 'development';
const knexConfig = require('../knexfile.js')[environment]

module.exports = knex(knexConfig);