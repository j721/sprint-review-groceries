const server = require("./server.js");

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});