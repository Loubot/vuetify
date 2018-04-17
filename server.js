'use strict'

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;


var models = require('./models')

models.sequelize.sync( { force: false } ).then(function() {
    console.log('sequelize done')
});











app.listen(port);
console.log('server started '+ port);