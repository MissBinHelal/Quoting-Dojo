const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting', { useNewUrlParser: true });
const QouteSchema = new mongoose.Schema({
    name: String,
    quote: String
  }, { timestamps: true })
  const Quote = mongoose.model('Qoute', QouteSchema);


module.exports=Quote