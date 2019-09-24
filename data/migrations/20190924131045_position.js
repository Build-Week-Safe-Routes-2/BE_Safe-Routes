
exports.up = function (knex) {
    return knex.schema.createTable('position', loc => {
        loc.increments();
        loc.integer('pos_id').unsigned().notNullable().references('id').inTable('info');
        loc.decimal('long').notNullable();
        loc.decimal('lat').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('position');
};
