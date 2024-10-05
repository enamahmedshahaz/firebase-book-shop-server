const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const books = require('./data/books.json');

app.get('/', (req, res) => {
    res.send('Simple-Book-Shop Server is Running...')
});

app.get('/api/products', (req, res) => {
    res.send('/api/products hit')
});

app.get('/api/products/:id', (req, res) => {
    res.send('/api/products/:id hit')
});

app.listen(port, () => {
    console.log(`Simple-Book-Shop Server is listening on port ${port}`)
});