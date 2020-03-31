const express = require('express');
const tarefa = require('./database/controllers/tarefa')
const usuario = require('./database/controllers/usuario')
const routes = express.Router();

routes.post("/tarefa", tarefa.Criar)
routes.get("/tarefa/:id",tarefa.Consultar)
routes.get("/tarefa",tarefa.Listar)

routes.post("/usuario", usuario.Criar)
routes.get("/usuario", usuario.logar)

 module.exports = routes;




 /**
 
routes.post("/estudoroute/:id",(request,response) => {
    //127.0.0.1:3333/EstudoRoute/1
    //route params, um único recurso
    const params = request.params;
    console.log(params); //query
    return response.json({
        evento: 'Semana Omni',
        Evento: 'Route'
    })
 })

 routes.get("/estudoquery",(request,response) => {
   //Query: parametros nomeados enviados na rota filtros;paginacao
   //127.0.0.1:3333/EstudoQuery?name=Gustavo&senha=123
   const query = request.query;
   console.log(query); //query
   return response.json({
       evento: 'Semana Omni',
       Evento: 'Query'
   })
})
//Post
routes.post("/estudobody",(request,response) => {
    //Body:Paramentros no corpo na mensagem
    //127.0.0.1:3333/EstudoBody
    const body = request.body;
    console.log(body); //query
    return response.json({
        evento: 'Semana Omni',
        Evento: 'Body'
    })
 })
 
 **/