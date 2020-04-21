console.log('hello world!');

// const http = require("http");
const fs = require("fs");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json);
// app.user()

function readData() {
  try {
    return fs.readFileSync('data.json', 'utf8');
  } catch (err) {
    console.error(err);
  }
}

app.get('/', (req, res) => {
  res.json(JSON.parse(readData()));
});

app.listen(3000, () => {
  console.log('Express server runiing!')
});



// const server = http.createServer((req, res) => {
//   res.end('Hi from the server!');
// });
//
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server Running!');
// });