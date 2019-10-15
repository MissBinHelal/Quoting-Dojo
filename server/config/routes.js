//module.exports = routes
const mongoose = require('mongoose');
Quote = mongoose.model('Qoute')
module.exports =function (app){
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
}
