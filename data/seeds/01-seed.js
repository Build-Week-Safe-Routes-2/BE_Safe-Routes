
exports.seed = function (knex, Promise) {

    return knex('info').insert([

        {
            id: 1,
            LATITUDE: 33.58986944,
            LONGITUD: -86.12425278,
            ROUTE: 1,
            TYP_INT: 1,
            YEAR: 2016,
            PERSONS: 1,
            STATE: 1,
            ST_CASE: 10128,
            DAY: 31,
            MONTH: 3,
            HOUR: 12,
            FATALS: 1,
            DRUNK_DR: 0,
            MINUTE: 40
        },
        {
            id: 2,
            LATITUDE: 44.54146944,
            LONGITUD: -88.07543056,
            ROUTE: 1,
            TYP_INT: 1,
            YEAR: 2016,
            PERSONS: 1,
            STATE: 1,
            ST_CASE: 550008,
            DAY: 31,
            MONTH: 3,
            HOUR: 12,
            FATALS: 1,
            DRUNK_DR: 0,
            MINUTE: 40
        },
    ]);

};
