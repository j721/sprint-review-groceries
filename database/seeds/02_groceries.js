
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('groceries').insert([
        {name: 'milk', store_id: 1},
        {name: 'bread', store_id: 1},
        {name: 'eggs', store_id: 1}
      ]);
};
