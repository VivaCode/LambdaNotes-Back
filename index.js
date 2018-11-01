require('dotenv').config();
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

const port = process.env.PORT || 8000;
const instance = server.listen(port, () =>
	console.log(`\n=== Server running on port: ${instance.address().port} ===\n`)
);