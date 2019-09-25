
exports.seed = function (knex, Promise) {

    return knex('info').insert([
        { id: 1, witness: 'Ace', traffic: 'moderate' },
        { id: 2, witness: 'Roman', traffic: 'dangerous' },
        { id: 3, witness: 'Nick', traffic: 'light' },
        { id: 4, witness: 'Ian', traffic: 'moderate' },
        { id: 5, witness: 'Nayomi', traffic: 'dangerous' },
        { id: 6, witness: 'Sesinos', traffic: 'moderate' },
        { id: 7, witness: 'Timothy', traffic: 'light' },
        { id: 8, witness: 'Sarmen', traffic: 'moderate' },
        { id: 9, witness: 'Flo from Progressive', traffic: 'moderate' }
    ]);

};
