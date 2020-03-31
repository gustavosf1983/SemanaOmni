

exports.up = function(knex) {

    return knex.schema.hasTable('USUARIO').then(function(exists) {
         if (!exists) {
           return knex.schema.createTable('USUARIO', function(t) {
             t.integer('USU_CODIGO').primary();
             t.string('USU_AUTH');
             t.string('USU_USUARIO',20);
             t.string('USU_SENHA',1000).notNullable();
             t.datetime('USU_CADASTRO',2).defaultTo(knex.fn.now());;
             t.datetime('USU_ATUALIZACAO',2).defaultTo(knex.fn.now());;
           });
         }
       });
 }; 
 exports.down = function(knex) {
   return knex.schema.dropTable('USUARIO');
 };
 