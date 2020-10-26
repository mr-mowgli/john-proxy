require('newrelic');
const express = require('express');

const app = express();

const PORT = 3000;
const HOST = 'localhost';

app.use(express.static(__dirname));

app.get('/loaderio-ef5fd1d1ea935ab4dda1f3cfaf6f910a', async (req, res) => {
  res.status(200).send('loaderio-ef5fd1d1ea935ab4dda1f3cfaf6f910a');
});

app.get('/loaderio/payload.json', async (req, res) => {
  res.status(200).json(payload);
});

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
