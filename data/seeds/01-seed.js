
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('info').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('info').insert([
                { id: 1, name: 'Ace', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 2, name: 'Roman', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 3, name: 'Nick', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 4, name: 'Ian', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 5, name: 'Nayomi', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 6, name: 'Sesinos', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 7, name: 'Timothy', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 8, name: 'Sarmen', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 },
                { id: 9, name: 'Flo from Progressive', budget: 4000.56, longitude: 76.15157, latitude: 76.15157 }
            ]);
        });
};
