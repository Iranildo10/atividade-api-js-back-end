#  API com NodeJs

### Sumário
Neste mini projeto, unimos a popolaridade das APIs com a populariadade da linguagem JavaScript para criar um CRUD(CREATE, READ, UPDATE, DELETE) de usuários.

### Tecnologias e conceitos utilizadas
* NodeJS
* NPM
* Nodemon
* MongoDb Setup
* Mongooose
* Modelo MVC com repositoy pattern
* Async/Await
* Armazenamento de imagem com Azure

### Utilizando a API
* Cadastro de Usuário
    Rota: localhost:3000/usuario
    Método: POST
    Exemplo de BODY:
    {
	"nome": "João da Silva",
	"email": "Joao_silva@hotmail.com",
	"celular": "(XX) 9 9999-9999",
	"senha": "12345",
	"imagem": "Aqui vai uma imagem em Base64 (String)"
    }

* Listando todos Usuários Cadastrados
    Rota: localhost:3000/usuario
    Método: GET

* Listando usuário pelo ID
    Rota: localhost:3000/usuario/"ID"
    Método: GET

* Atualizando Usuário
    Rota: localhost:3000/usuario
    Método: PUT
    Exemplo de BODY:
    {
    "id": "ID do Usuário"
	"nome": "João da Silva Rocha",
	"email": "Joao_silva@hotmail.com",
	"celular": "(XX) 9 9999-9999",
	"senha": "12345",
	"imagem": "Aqui vai uma imagem em Base64 (String)"
    }

* Excluindo Usuário
    Rota: localhost:3000/usuario/"ID"
    Método: DELETE





