
exports.up = function (knex) {
    return knex.schema.createTable('info', data => {
        data.increments();
        data.string('name').notNullable().unique();
        data.decimal('budget').notNullable();
        data.decimal('latitude').notNullable();
        data.decimal('longitude').notNullable();

    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('info');

};
