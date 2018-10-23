//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

//Note to self: killall -9 node ---listen EADDRINUSE :::3000

//HUSK AT START MONGOD før programmet køres.
//-->sudo service mongod start<--
//-->sudo service mongod stop<--

//programmet køres med >npm run start<

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Client = require('./ModelControllerRoute/clientModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./ModelControllerRoute/routes'); //importing route
routes(app); //register the route


app.listen(port);

//Middleware : Skriver hvis den ikke kan finde siden.
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('todo list RESTful API server started on: ' + port);
