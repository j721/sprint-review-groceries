const express = require('express');
const helmet = require('helmet');

const StoreRouter = require('./router/store-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/stores', StoreRouter);

server.get('/', (req, res) => {
    res.send('Lets write some awesome code!');
})

module.exports = server;