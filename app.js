const restify = require('restify');
var path = require('path');

var app = restify.createServer();

const clicks = require('./routes/clicks');
clicks.applyRoutes(app, '/clicks');

module.exports = app;
