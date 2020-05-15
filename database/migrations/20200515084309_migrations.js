
exports.up = function (knex) {
    return knex.schema
        .createTable('store', tbl => {
            tbl.increments(); //unique id 
            tbl.string('store_name', 128).unique().notNullable();  //primrary key
            tbl.string('location', 120).notNullable();
            tbl.boolean('completed')
                .defaultTo(false);
        })
        .createTable('groceries', tbl => {
            tbl.increments();
            tbl.string("grocery_name", 128).notNullable();
            tbl.boolean('complelted')
                .defaultTo(false);
            //foreign key
            tbl.interger("store_id")
            .unsigned()   //only positive intergers
            .notNullable()
            .references('id')
            .inTable('store')
            .onDelete('CASCADE')       //if RESTRICT then you must delete groceries before the store
            .onUpdate('CASCADE')
        })
        .createTable('supplies', tbl=>{
            tbl.increments();
            tbl.string('supply_name')
            .notNullable()
        })


};

exports.down = function (knex) {

};
