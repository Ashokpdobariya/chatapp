const routes = require('express').Router();
const con = require('../Controller/Home')
routes.get('/home',con.Home)
module.exports = routes;