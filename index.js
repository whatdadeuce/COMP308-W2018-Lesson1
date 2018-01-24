const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Goodbye Cruel World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */