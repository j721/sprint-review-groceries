const db = require('../database/bdConfig.js');

module.exports = {
    getAllStores,
    getStoreById,
    getAll
}

function getAllStores() {
    // SELECT * FROM store
    return db.select('*').from('store');
}

function getStoreById(id) {
    let query = db('store as s')
    return query.where('s.id', id).first();
}

function getAll(id) {
    return db("store_groceries_supplies")
    .join('supplies', 'supplies.id', 'store_groceries_supplies.supplies_id')
    .join('store', 'store.id', 'store_groceries_supplies.store_id')
    .select('store.name', 'supplies.name')
    .where({'store_groceries_supplies.store_id' : id})
}