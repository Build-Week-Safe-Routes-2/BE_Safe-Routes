
exports.seed = function (knex, Promise) {

    return knex('info').insert([

        {
            ID: 1,
            LATITUDE: 30.748005970539843,
            LONGITUD: -60.11728659260366,
            PROBABILITY_OF_ACCIDENT: "24.93%",
            RISK_LEVEL: "Moderate to High",
            WEATHER: 2,
            ROUTE: 6,
            TYP_INT: 1,
            TWAY_ID: "WOLF RIDGE RD"
        },
        {
            ID: 2,
            LATITUDE: 32.54497821745906,
            LONGITUD: -53.63684929388019,
            PROBABILITY_OF_ACCIDENT: "20.06%",
            RISK_LEVEL: "Moderate to High",
            WEATHER: 2,
            ROUTE: 6,
            TYP_INT: 1,
            TWAY_ID: "WOLF RIDGE RD"
        }
    ]);

};
