const mongoose = require('mongoose')

function connect() {

    mongoose.set('strictQuery', false)

    mongoose.connect('mongodb://localhost:27017/pedidos-delivery?readPreference=primary')

    const db = mongoose.connection

    db.once('open', () => console.log('Connected to Database'))

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect,
}