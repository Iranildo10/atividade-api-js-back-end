'use strict'

const repository = require('../repositories/usuario-repository');
const md5 = require('md5');


//Cadastrar Usuário
exports.post = async (req, res, next) => {

    try {

        await repository.create({
            
            nome: req.body.nome,
            email: req.body.email,
            celular: req.body.celular,
            senha: md5(req.body.senha + global.SALT_KEY),
            imagem: await repository.saveUserImage(req.body.imagem)
        }
        );

        res.status(201).send({ 
            message: 'Usuario cadastrado com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar Usuario', 
            data: e.toString()
        });

    }

};

//Atualizar Usuário
exports.update = async (req, res, next) => {

    try {

        var filter = req.body.id;
        var update = {   
            nome: req.body.nome,
            email: req.body.email,
            celular: req.body.celular,
            telefone: req.body.telefone,
            senha: md5(req.body.senha + global.SALT_KEY),
            imagem: await repository.saveUserImage(req.body.imagem)
        };

        await repository.update(filter, update);

        var data = await repository.getById(req.body.id);

        res.status(201).send({ 
            message: 'Usuario atualizado com sucesso!',
            usuario: data
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao atualizar Usuario', 
            data: e.toString()
        });

        console.log(e)
    }

};

//Remover Usuario
exports.remove = async (req, res, next) => {

    try {
        await repository.remove(req.params.id
        );

        res.status(201).send({ 
            message: 'Usuario removido com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao remover Usuario', 
            data: e.toString()
        });

        console.log(e)
    }

};

//Pesquisar Todos
exports.get = async (req, res, next) =>{
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: error
        });
        
    }
};


//Perquisar por ID
exports.getById = async (req, res, next) =>{
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: error
        });
        
    }
};