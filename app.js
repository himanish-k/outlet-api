const express = require('express');
const parse = require('body-parser');
const { getHome } = require('./routes/index.js'); 
const { getSocket, getSocketList, postSocket, putSocket } = require('./routes/socket.js'); 
const app = express();
const PORT = 3000;

app.use(parse.json());

app.get('/', getHome);
app.get('/sockets', getSocketList);
app.get('/sockets/:id', getSocket);
app.post('/sockets', postSocket);
app.put('/sockets', putSocket);

app.listen(PORT);