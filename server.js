const express = require("express");
const app = express();
const mongoose = require('mongoose');
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
app.get('/', (req, res) => {
  res.render("index")
})

app.post('/record', (req, res) => {
  const record = new Quote({name : req.body.name, quote : req.body.quote});  
  console.log(req.body.name);  
  record.save(function (err) {
    if (err) {
      console.log('something went wrong');
      console.log(record.errors);
      res.render('index', { errors: record.errors })
    }
    else {
      console.log('successfully added a quote!');
      console.log(record);
      res.redirect('/qoute');
    }
  });
});
app.get('/qoute', (req, res) => {
  arr = Quote.find({}, function (err, quote) {
    res.render('quote', { arr: quote });
  })

})
app.listen(3000, () => console.log("listening on port 3000"))