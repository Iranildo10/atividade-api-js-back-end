'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        
    },
    email: {
        type: String,
        
    },
    celular: {
        type: String,
       
    },
    senha: {
        type: String,
        
        
    },
    imagem: {
        type: String,
        
    }
    
});

module.exports = mongoose.model('Usuario', schema);
