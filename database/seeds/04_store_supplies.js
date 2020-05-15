
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('store_supplies').insert([
        {store_id: 1, supplies_id: 3},
        {store_id: 1, supplies_id: 1},
        {store_id: 2, supplies_id: 2},
        {store_id: 3, supplies_id: 3}
      ]);
};
