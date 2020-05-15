
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('supplies').insert([
        {name: 'grocery list'},
        {name: 'cart'},
        {name: 'reusable bags'}
      ]);
};
