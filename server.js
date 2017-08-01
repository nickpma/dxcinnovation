var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/profileModel'),
  bodyParser = require('body-parser');
  
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://ds035965.mlab.com:35965'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/profileRoutes');
routes(app);
app.listen(port);

console.log('Profile list RESTful API server started on: ' + port);