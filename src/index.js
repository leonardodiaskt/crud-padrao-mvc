//Importar as bibliotecas

const express = require('express')
const app = express()


//Importar módulos

const rotaFuncionario = require('./routes/funcionarioRoutes')


//Set infromação como json
app.use(express.json())
app.use('/', rotaFuncionario)


//Variaveis
const port = 3000

//Conectar banco

//Criar a tabela (modelo/model -> M(model)VC)
    

//-----GET-----


//Servidor
app.listen(port,() => {
    console.log('Servidor em operação ...')
})
