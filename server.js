const express = require("express");
const app = express();
var path = require("path");
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }))
//model set up

// create an object to that contains methods for mongoose to interface with MongoDB
//
var routes_setter = require('./server/config/routes.js');

// invoke the function stored in routes_setter and pass it the "app" variable

routes_setter(app);

app.listen(3000, () => console.log("listening on port 3000"))