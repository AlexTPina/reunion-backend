exports.up = function (knex, Promise) {
    return knex.schema.createTable('classmates', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('address');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classmates')
};