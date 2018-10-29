const express = require('express');
const cors = require('cors');
const knex = require('knex');
const server = express();

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());
server.use(cors());

// sanity check
server.get('/', (req, res) => {
  res.send('Its Alive!');
});


const port =  8000;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});