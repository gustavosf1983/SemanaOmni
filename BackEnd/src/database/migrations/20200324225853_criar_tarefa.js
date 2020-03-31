
exports.up = function(knex) {

   return knex.schema.hasTable('TAREFA').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('TAREFA', function(t) {
            t.integer('TAR_CODIGO').primary();
            t.string('TAR_ASSUNTO',50);
            t.string('TAR_DESCRICAO',2000);
            t.string('TAR_USUARIO').notNullable();
            t.datetime('TAR_CADASTRO',2).defaultTo(knex.fn.now());
            t.datetime('TAR_ATUALIZACAO',2).defaultTo(knex.fn.now());
            t.bit('TAR_RESOLVIDO').defaultTo(0);
          });
        }
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('TAREFA');
};
