'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');


//Cadastrar usuario
router.post('/', controller.post);

//Buscar todos
router.get('/', controller.get);

//Buscar por ID
router.get('/:id', controller.getById);

//Atualizar Cadastro
router.put('/', controller.update);

//Remover Cadastro
router.delete('/:id', controller.remove);

module.exports = router;


