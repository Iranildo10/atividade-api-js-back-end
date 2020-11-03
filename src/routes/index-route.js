'use strict'

const express = require('express');
const router = express.Router();

//Obter informações
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Minha API com JAVASCRIPT NO BACK-END",
        version: "0.0.1"
    });
});

module.exports = router;