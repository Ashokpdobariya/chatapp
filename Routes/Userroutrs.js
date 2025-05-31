const routes = require('express').Router();
const user = require("../Controller/User");
    routes.post('/insertuser',user.addUser);
module.exports = routes;