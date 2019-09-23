const knex = require('knex');
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig[process.env.NODE_ENV || 'production']); //for heroku

module.exports = db;