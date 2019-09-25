exports.up = function (knex) {
    return knex.schema.createTable('info', data => {
        data.increments().unique();
        data.integer('LATITUDE').notNullable();
        data.integer('LONGITUD').notNullable();
        data.string('PROBABILITY_OF_ACCIDENT').notNullable();
        data.integer('RISK_LEVEL').notNullable();
        data.integer('WEATHER').notNullable();
        data.integer('ROUTE').notNullable();
        data.integer('TYP_INT').notNullable();
        data.integer('TWAY_ID').notNullable();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('info');

};