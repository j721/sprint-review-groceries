
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('groceries').insert([
        {id: 1, name: 'milk', store_id: 1},
        {id: 2, name: 'bread', store_id: 1},
        {id: 3, name: 'eggs', store_id: 1}
      ]);
};
