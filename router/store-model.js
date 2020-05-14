const db = require('../database/bdConfig.js');

module.exports = {
    getAllStores
}

function getAllStores() {
    // SELECT * FROM store
    return db.select('*').from('store');
}