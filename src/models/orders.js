const mongoose = require('mongoose')

//Creating Schema

const schema = new mongoose.Schema({
    clientCode: String,
    productsCode: [String],
    dateCreation: String,
    status: String
})

const Model = mongoose.model('orders', schema)

module.exports = Model