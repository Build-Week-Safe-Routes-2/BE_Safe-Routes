
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('position').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('position').insert([
        { pos_id: 1, long: 76.15157, lat: 76.15157 },
        { pos_id: 2, long: 76.15157, lat: 76.15157 },
        { pos_id: 3, long: 76.15157, lat: 76.15157 },
        { pos_id: 4, long: 76.15157, lat: 76.15157 },
        { pos_id: 5, long: 76.15157, lat: 76.15157 },
        { pos_id: 6, long: 76.15157, lat: 76.15157 },
        { pos_id: 7, long: 76.15157, lat: 76.15157 },
        { pos_id: 8, long: 76.15157, lat: 76.15157 },
        { pos_id: 9, long: 76.15157, lat: 76.15157 }
      ]);
    });
};
