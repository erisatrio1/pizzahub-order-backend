import http from 'http'
import app from './bin/api/Server.js'
import dotenv from 'dotenv'
import db from './bin/config/Database.js';
dotenv.config();

const port = process.env.PORT;

// (async() => {
//     await db.sync();
// })();

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server up and running');
})