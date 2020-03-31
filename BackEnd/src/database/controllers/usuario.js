const conexao = require("../connection");
const crypto = require("crypto");

module.exports = {     
    async logar(request,response){
        try{
            const {USU_USUARIO, USU_SENHA} = request.body;
            if (USU_USUARIO === undefined || USU_USUARIO === null || USU_SENHA === undefined || USU_SENHA === null)
            {
                return response.status(400).json({"Resposta":"dados invalidos, precisa de usuario e senha no body"})
            }
            const retorno = await  conexao.knex('USUARIO')
            .where("USU_USUARIO",'=', USU_USUARIO).andWhere("USU_SENHA","=",USU_SENHA)  
            if(retorno.length)
            {
                response.status(200).json({"RESP":"OK", 
                    "USU_CODIGO": retorno[0].USU_CODIGO,
                    "USU_USUARIO": retorno[0].USU_NOME,
                    "USU_AUTH": retorno[0].USU_AUTH    
                })
            }
            else
            {
                response.status(400).json({"resposta":"Usuário ou senha inválidos"})
            }

        }
        catch(err)
        {
            console.error('Database error:', err);     // (log and send generic 500 code)
            res.status(500).send('Error');
        }            

        //console.log(retorno[0].USU_NOME);


    },

     async Criar (request,response){
        const{ USU_USUARIO,USU_SENHA } = request.body; 
        if (USU_USUARIO === undefined || USU_USUARIO === null || USU_SENHA === undefined || USU_SENHA === null)
        {
            return response.status(400).json({"Resposta":"dados invalidos, precisa de usuario e senha no body"})
        }
        const row = await conexao.knex.raw("SELECT COUNT(USU_USUARIO) AS name " +
            " FROM USUARIO WHERE USU_USUARIO ='" + USU_USUARIO + "'") 
        if(row[0].name > 0)
        {
            return response.status(403).json({"Resposta":"Já existe usuário com esse nome"})
        }

        const id = await conexao.knex.raw("SELECT MAX(USU_CODIGO) + 1 AS USU_CODIGO FROM USUARIO")
        let{ USU_CODIGO } = id[0];
        if(USU_CODIGO === null)
        {
            USU_CODIGO = 1
        }
        const USU_AUTH = crypto.randomBytes(4).toString('HEX');
        const USU_CADASTRO = conexao.knex.fn.now();
        const USU_ATUALIZACAO = conexao.knex.fn.now()
        //for (var r of row) {
        //    console.log('User:', r.name);
        //}
        const inserir = {
            USU_CODIGO,
            USU_AUTH,
            USU_USUARIO,
            USU_SENHA,
            USU_CADASTRO,
            USU_ATUALIZACAO
        }    
        var int = await conexao.knex("USUARIO")
            .insert(inserir)
            .then(
                function (result) {
                    return response.status(201).json({'USU_CODIGO': USU_CODIGO})
                })
                .catch(function(err) {                  
                    console.log(err);  
                    //response.send();
                })
                .finally(function() {   
                    //conexao.connection.destroy();  
                }                
            )   
   
    }


}