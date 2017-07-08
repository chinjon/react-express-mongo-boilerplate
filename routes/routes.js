const routes = require('express').Router();
const _ = require('lodash');

routes.get('/api/test', (req, res) => {
    console.log("you've hit the route")
    res.send("This works")
});

module.exports = routes;