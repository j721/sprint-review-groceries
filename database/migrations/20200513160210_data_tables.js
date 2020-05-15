// we need a store, groceries, and supplies table - and a connecting table for many to many relationships

exports.up = function(knex) {
  return knex.schema
  .createTable('store', tbl => {
      tbl.increments(); // unique ID
      tbl.string('name', 30)
      .notNullable();
      tbl.string('location', 30);
      tbl.boolean('completed')
      .defaultTo(false);
  })
  .createTable('groceries', tbl => {
      tbl.increments();
      tbl.string('name', 30)
      .notNullable();
      tbl.boolean('completed')
      .defaultTo(false);
      // foreign key that references the id in the store table - one to many relationship
      tbl.integer('store_id') 
      .unsigned() // not negative
      .notNullable()
      .references('id')
      .inTable('store')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('supplies', tbl => {
      tbl.increments();
      tbl.string('name', 30)
      .notNullable();
      tbl.boolean('in_use')
      .defaultTo(false);
  })
  .createTable('store_supplies', tbl => {
      // this is the table to combines the store and the supplies table - many to many relationship
      tbl.increments();
      // foreign key that points to store table 
      tbl.integer('store_id')
      .unsigned()
      .references('id')
      .inTable('store')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      // forgeign key that points to supplies table 
      tbl.integer('supplies_id')
      .unsigned()
      .references('id')
      .inTable('supplies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
   // can't take off your socks without taking off your shoes...put the tables backward
   return knex.schema
   .dropTableIfExists('store_supplies')
   .dropTableIfExists('supplies')
   .dropTableIfExists('groceries')
   .dropTableIfExists('store');
};
