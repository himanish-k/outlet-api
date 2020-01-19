const express = require('express');
const parse = require('body-parser');
const app = express();
const PORT = 3000;
let nextId = 5;

let sockets = [
    { id: 1, status: 'on', location: 'US' },
    { id: 2, status: 'on', location: 'Canada' },
    { id: 3, status: 'off', location: 'Puerto Rico' },
    { id: 4, status: 'on', location: 'Canada' },
];

app.use(parse.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Swidget world!');
});

app.get('/sockets', (req, res) => {
    res.send(sockets);
});

app.get('/sockets/:id', (req, res) => {
    const id = req.params.id;
    const filtered = sockets.filter(v => v.id == id);
    res.send(filtered.length === 1 ? filtered[0] : {} );
});

app.post('/sockets', (req, res) => {
    const { status, location } = req.body;
    const newSocket = {
        id: nextId++,
        status,
        location
    };
    sockets.push(newSocket);
    res.send(sockets.filter(v => v.id == newSocket.id));
})

app.listen(PORT);