const express = require('express');

const Store = require('./store-model.js');

const router = express.Router();

// GET ALL STORES
router.get('/', (req, res) => {
    Store.getAllStores()
        .then(stores => {
            res.status(200).json(stores);
        })
        .catch(err => {
            res.status(500).json({
                errMessage: 'Sorry, an error has occured with retrieving stores'
            })
        })
})

// GET STORE BY ID 
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Store.getStoreById(id)
        .then(specific_store => {
            if (id) {
                res.status(200).json(specific_store);
            } else {
                res.status(404).json({
                    errMessage: 'No project with that ID'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errMessage: 'Sorry, no store information can be found'
            })
        })
})

// GET ALL THAT CONNECTS
router.get('/:id/connecting', (req, res) => {
    const id = req.params.id;
    Store.getAll(id)
    .then(all => {
        res.status(200).json(all);
    })
    .catch(err => {
        res.status(500).json({
        errMessage: 'Sorry, no information can be found'
    })
})
})

module.exports = router;