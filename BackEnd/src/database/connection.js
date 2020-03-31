const knex1 = require('knex')
const configuration = require("../../knexfile")
const knex = knex1(configuration.development);
module.exports = {
    knex
};