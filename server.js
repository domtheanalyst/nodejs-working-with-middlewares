const http = require('http');
const app = require('./src/app')

const server = http.createServer(app);

const PORT = 6000;

server.listen(PORT, () => {

    console.log('server running successfully');
});

