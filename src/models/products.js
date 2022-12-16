const mongoose = require('mongoose')

//Creating Schema

const schema = new mongoose.Schema({
    name: String,
    price: Number
})

const Model = mongoose.model('products', schema)

module.exports = Model