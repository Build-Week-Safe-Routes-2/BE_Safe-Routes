
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                { id: 1, name: 'Ace' },
                { id: 2, name: 'Roman' },
                { id: 3, name: 'Nick' },
                { id: 4, name: 'Ian' },
                { id: 5, name: 'Nayomi' },
                { id: 6, name: 'Sesinos' },
                { id: 7, name: 'Timothy' },
                { id: 8, name: 'Sarmen' },
                { id: 9, name: 'Flo from Progressive' }
            ]);
        });
};
