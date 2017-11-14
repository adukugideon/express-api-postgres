const environment = process.env.NODE_ENV || 'production';
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('./knex-pagination');
const connection = knex(environmentConfig);

module.exports = connection;
