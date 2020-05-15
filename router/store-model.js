const db = require('../database/bdConfig.js');

module.exports = {
    getAllStores,
    getStoreById,
    getSuppliesForStore
}

function getAllStores() {
    // SELECT * FROM store
    return db.select('*').from('store');
}

function getStoreById(id) {
    let query = db('store as s')
    return query.where('s.id', id).first();
}

// reusable bags is in 1 and 3 - many to many
function getSuppliesForStore(id) {
    return db("store_supplies")
    .join('supplies', 'supplies.id', 'store_supplies.supplies_id')
    .join('store', 'store.id', 'store_supplies.store_id')
    .select('store.name', 'supplies.name')
    .where({'store_supplies.store_id' : id})
}