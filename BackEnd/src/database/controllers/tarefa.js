//const crypto = require("crypto");
const conexao = require("../connection");

module.exports = {
    async Criar (request,response) {   
        const{ TAR_ASSUNTO, TAR_DESCRICAO, TAR_USUARIO } = request.body;  
        const Authorization  = request.headers.Authorization;   
        const id = await conexao.knex.raw("SELECT MAX(TAR_CODIGO) + 1 AS TAR_CODIGO FROM TAREFA")
        let{ TAR_CODIGO } = id[0];
        if(TAR_CODIGO === null)
        {
            TAR_CODIGO = 1
        }

        const TAR_CADASTRO = conexao.knex.fn.now();
        const TAR_ATUALIZACAO = conexao.knex.fn.now()
        const TAR_RESOLVIDO = 0;
        const inserir = {
            TAR_CODIGO,
            TAR_ASSUNTO,
            TAR_DESCRICAO,
            TAR_USUARIO,
            TAR_CADASTRO,
            TAR_ATUALIZACAO,
            TAR_RESOLVIDO
        }    
        var int = await conexao.knex("TAREFA").insert(inserir)
            .then(
                function (result) {
                    response.json({TAR_CODIGO})
                })
                .catch(function(err) {                  
                    console.log(err);  
                    //response.send();
                })
                .finally(function() {   
                    //conexao.connection.destroy();  
                });         
          
    },   

    async Listar (request,response) {
        const { TAR_USUARIO,TAR_RESOLVIDO,pages = 1} = request.query;
        console.log("Pagina:" + pages)

        const {total} = await conexao.knex('TAREFA').count('*', {as: 'total'})
            .where("TAR_USUARIO","=",TAR_USUARIO)
            .andWhere("TAR_RESOLVIDO","=",TAR_RESOLVIDO).first()
        console.log("Total: " + total)

        await  conexao.knex.select(["TAREFA.*",'USU_USUARIO'])       
        .from("TAREFA")
        .join('USUARIO','USU_CODIGO','=','TAR_USUARIO')
        .limit(5)
        .offset((pages - 1) * 5)
        .where("TAR_USUARIO","=",TAR_USUARIO)
        .andWhere("TAR_RESOLVIDO","=",TAR_RESOLVIDO)
        .orderBy("TAR_CODIGO")
        .then(
           function (depts){ 
                response.header("X-Total-Count", total)
                response.json(depts)
       // depts.forEach((dept)=>{ //use of Arrow Function  
        //    response.json({...dept});
           // sResponse += {...dept}        
            }
        ).catch(function(err) {          
            console.log(err); 
            //response.send(); 
        }).finally(function() {   
          //  conexao.connection.destroy();  
        });     
    },   
    
    async Consultar (request,response) {
        const {id} = request.params;
        console.log(id)
        await conexao.knex.select("*").from("TAREFA").where('TAR_CODIGO' , id)  
            .then(function (depts){ 
                // response.json({...depts})
                response.json(depts)
        }).catch(function(err) {  
        // All the error can be checked in this piece of code  
        console.log(err);  
        }).finally(function() {  
        // To close the connection pool  
        //conexao.connection.destroy();  
        });     
    }    

}; 