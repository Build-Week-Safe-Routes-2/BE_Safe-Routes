exports.up = function (knex) {
    return knex.schema.createTable('info', data => {
        data.increments().unique();
        data.float('LATITUDE').notNullable();
        data.float('LONGITUD').notNullable();
        data.integer('ROUTE').notNullable();
        data.integer('TYP_INT').notNullable();
        data.integer('YEAR').notNullable();
        data.integer('PERSONS').notNullable();
        data.integer('STATE').notNullable();
        data.integer('ST_CASE').notNullable();
        data.integer('DAY').notNullable();
        data.integer('MONTH').notNullable();
        data.integer('HOUR').notNullable();
        data.integer('FATALS').notNullable();
        data.integer('DRUNK_DR').notNullable();
        data.integer('MINUTE').notNullable();

    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('info');

};