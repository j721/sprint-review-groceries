
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('store').insert([
        {id: 1, name: 'Giant', location: 'Westminster'},
        {id: 2, name: 'Shoppers'},
        {id: 3, name: 'Walmart', location: 'Hanover'}
      ]);
};
