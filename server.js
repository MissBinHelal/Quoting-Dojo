const express = require("express");
const app = express();
const mongoose = require('mongoose');
var path = require("path");
mongoose.connect('mongodb://localhost/quoting', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }))
//model set up
const QouteSchema = new mongoose.Schema({
  name: String,
  quote: String
}, { timestamps: true })
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Qoute', QouteSchema);
//
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable

routes_setter(app);

app.listen(3000, () => console.log("listening on port 3000"))