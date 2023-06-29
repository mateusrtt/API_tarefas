const express = require('express')
const consign = require('consign')
const cors = require('cors')
const app = express()
var porta = '3200'

app.use(cors())//resolve problema com politica de segurança CORS
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req, res)=>res.send('Geremciamento de Tarefas'))

//Rotas...
consign()
    .include('./controllers/rotas')
    .into(app)

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))