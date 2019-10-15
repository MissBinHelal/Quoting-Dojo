//module.exports = routes

const quotes = require("../controllers/quotes")
module.exports = function (app) {
    app.get('/', (req, res) => {
        quotes.index(req, res)
    })

    app.post('/record', (req, res) => {
        quotes.create(req, res)
    });
    app.get('/qoute', (req, res) => {
        quotes.find(req, res)
    })

}