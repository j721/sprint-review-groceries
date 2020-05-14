
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('supplies').insert([
        {id: 1, name: 'grocery list', store_id: 2},
        {id: 2, name: 'cart', store_id: 1 && 2 && 3},
        {id: 3, name: 'reusable bags', store_id: 3}
      ]);
};
