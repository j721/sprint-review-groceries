
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('store').insert([
        {name: 'Giant', location: 'Westminster'},
        {name: 'Shoppers'},
        {name: 'Walmart', location: 'Hanover'}
      ]);
};
