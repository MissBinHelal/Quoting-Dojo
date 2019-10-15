// All necessary requires, such as the Quote model.
const Quote= require("./models/model-quotes")

module.exports = {
    index: function(req, res) {
        res.render('../views/index')
        },
    create: function(req, res) {
        const record = new Quote({name : req.body.name, quote : req.body.quote});  
        console.log(req.body.name);  
        record.save(function (err) {
          if (err) {
            console.log('something went wrong');
            console.log(record.errors);
            res.render('../views/index', { errors: record.errors })
          }
          else {
            console.log('successfully added a quote!');
            console.log(record);
            res.redirect('/qoute');
          }
        });
    },
    find: function(req, res) {
        arr = Quote.find({}, function (err, quote) {
            res.render('../views/quote', { arr: quote });
    })
}
}
