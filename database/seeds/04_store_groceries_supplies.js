
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('store_groceries_supplies').insert([
        {id: 1, store_id: 1, grocery_id: 1, supplies_id: 1},
        {id: 2, store_id: 2, grocery_id: 2, supplies_id: 2},
        {id: 3, store_id: 3, grocery_id: 3, supplies_id: 3}
      ]);
};
