
//Importar biblioteca
const express = require('express');
const router = express.Router();

//Importar Módulo
const funcionario = require('../controllers/funcionarioControllers')

// HTTP Routers
router.get('/', funcionario.listarDados)
      .get('/:id', funcionario.listarDado)
      .post('/', funcionario.adicionarDados)
      .put('/:id', funcionario.atualizaDados)
      .delete('/:id', funcionario.deletaDados);


// define the about route


module.exports = router;