const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Executando nna porta: ${port} </h1>`));
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Online: ${port}`));
