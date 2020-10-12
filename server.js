require('rootpath')();
const express = require('express');
const http = require('http');
const app = express();
const connection = require('./database/connection');
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('./_helpers/jwt');
const dotenv = require("dotenv");
dotenv.config();
// import route
const equipment = require('./routes/equipment.route');
const user = require('./routes/user.rote');

//connect db
connection.connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// api routes
app.use('/equipment', equipment);
app.use('/user', user);

// start server
const port = process.env.PORT || 3001;
const hostname = process.env.HOSTNAME;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});