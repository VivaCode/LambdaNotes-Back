const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());
const routes = require('./data/config/routes');

// sanity check
server.get('/', (req, res) => {
  res.send('Its Alive!');
});

server.use('/api/notes', routes);

const port =  8000;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});