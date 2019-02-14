//KITTY KNOCK//
//dependandies//
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//tell node to create an express server//
var app = express();

// set port
var PORT = process.env.port || 8080;

//that cool thing Katie did
app.use(express.static('public'))

// sets up express to handle data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(process.env.PORT || 8080), function() {
    console.log("App listening on PORT: " + PORT);
  };
  