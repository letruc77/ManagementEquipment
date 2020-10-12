const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();
const port = 3000

const equipment = require('./routes/equipment.route');
const user = require('./routes/user.rote');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/equipment', equipment);
app.use('/user', user);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})