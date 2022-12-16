const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const db = require('./database/db')

const app = express()

db.connect()

//Habilita CORS

const allowedOrigins =[
    'http://127.0.0.1:5500'
]

app.use(cors({
    origin:function(origin, callback) {
        let allowed = true
        //mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed =false

        callback(null, allowed)
    }
}))

//Habilita server para receber dados JSON
app.use(express.json())

//definindo rotas
app.use('/api', routes)

//Executando o Servidor

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))