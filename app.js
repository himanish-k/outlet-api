const express = require('express');
const parse = require('body-parser');
const { getHome } = require('./routes/index.js'); 
const { getSocket, getSocketList, postSocket, putSocket } = require('./routes/socket.js'); 
const app = express();
const PORT = 3000;

app.use(parse.json());

app.get('/', (req, res) => res.send(getHome()));
app.get('/sockets', (req, res) => res.send(getSocketList()));
app.get('/sockets/:id', (req, res) => res.send(getSocket(req.params)));
app.post('/sockets', (req, res) => res.send(postSocket(req.body)));
app.put('/sockets', (req, res) => res.send(putSocket(req.body)));

app.listen(PORT);