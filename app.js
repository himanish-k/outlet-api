const express = require('express');
const app = express();
const PORT = 3000;

let sockets = [
    { id: 1, status: 'on', location: 'US' },
    { id: 2, status: 'on', location: 'Canada' },
    { id: 3, status: 'off', location: 'Puerto Rico' },
    { id: 4, status: 'on', location: 'Canada' },
];

app.get('/', (req, res) => {
    res.send('Welcome to the Swidget world!');
});

app.get('/sockets', (req, res) => {
    res.send(sockets);
});

app.get('/sockets/:id', (req, res) => {
    const id = req.params.id;
    res.send(sockets.filter(v => v.id == id));
});

app.listen(PORT);