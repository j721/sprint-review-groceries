const express = require('express');

const Store = require('./store-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Store.getAllStores()
        .then(stores => {
            res.json(stores);
        })
        .catch(err => {
            res.status(500).json({ errMessage: 'sorry, an error has occured with retrieving stores' })
        })
})

module.exports = router;