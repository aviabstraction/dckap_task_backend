const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');

//Custom Imports
const field_data = require('./field_data.json');
const config = require('./config');

const bodyParser = require('body-parser');

const { port } = config;

const app = express();

app.use(bodyParser.json());

app.enable('trust proxy');

app.use(methodOverride());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'backend connection established' });
});

app.get('/formfields', (req, res) => {
  res.json({ status: 200, data: field_data, type: 'form_data' });
});

app.listen(port, () => console.log(`Server Listening on Port ${port}`));
