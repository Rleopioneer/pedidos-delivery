const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const db = require('./database/db')

db.connect()

const app = express()

//Habilita server para receber dados JSON

app.use(express.json())

//definindo rotas
app.use('/api', routes)

//Executando o Servidor

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on por ${port}`))