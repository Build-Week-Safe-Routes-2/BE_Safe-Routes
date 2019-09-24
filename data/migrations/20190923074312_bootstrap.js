
exports.up = function (knex) {
    return knex.schema.createTable('info', data => {
        data.increments().unique();
        data.string('witness').notNullable();
        data.string('traffic').notNullable();


    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('info');

};
