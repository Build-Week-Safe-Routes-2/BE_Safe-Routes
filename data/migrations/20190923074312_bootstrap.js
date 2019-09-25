exports.up = function (knex) {
    return knex.schema.createTable('info', data => {
        data.increments().unique();
        data.decimal('LATITUDE').notNullable();
        data.decimal('LONGITUD').notNullable();
        data.string('PROBABILITY_OF_ACCIDENT').notNullable();
        data.string('RISK_LEVEL').notNullable();
        data.integer('WEATHER').notNullable();
        data.integer('ROUTE').notNullable();
        data.integer('TYP_INT').notNullable();
        data.string('TWAY_ID').notNullable();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('info');

};