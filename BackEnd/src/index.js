//comentario teste commit

const express = require('Express');
const cors = require('cors');
const routes = require('./routes');
const app  = express();
app.use(cors({
    origin: 'http://127.0.0.1/'
}));
app.use(express.json());


app.use(routes);

app.listen(3333,() => {
    console.log("Conectado porta 3333")
});

//Instalar o gerenciador de pacote https://chocolatey.org/install
//Instalar o Node.js versão LTE()  https://nodejs.org/pt-br/download/package-manager/#windows
//instalar o Yarn
//Instalar o Visual Studio Code
//Adicionar extensões
    //material icon Theme
    //Drácula
//yarn init -y  ou npm init -y
//yarn add express
//npm install nodemon -D

//no package
//  "scripts": {
//    "start": "nodemon index.js"
//  },

//nodemon index.js



/** METODOS HTTP
 * Get - buscar
 * Post - Criar
 * Put - Alterar
 * Delete - Deletar
 **/

 /**Bancos de Dados
  * SQL: MySql, SqlLite,PostgreSql,Oracle,Microsoft Sql Server
  * noSQL: MongoDB, CouchDB
  * 
  */
 //npm install knex
//npm install mssql driver SQL SERVER
//npx knex init
//Edit knexfile.js e coloque a conexao
//criar pasta database\migrations e rodar npx knex migrate:make criar_tarefa (primeira )
//colocar o código na migration
//Rodar a migration npx knex migrate:latest


