const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const authenticateToken = (req, res, next) => {
  const token = req.headers['token'];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

const checkId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.body.id)) {
    res.send('Id is not the correct format!');
    return;
  }
  if (!mongoose.isValidObjectId(req.body.owner)) {
    res.send('Owner is not the correct format!');
    return;
  }
  next();
}

const checkUserCreate = (req, res, next) => {
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!req.body.email) {
    res.send('Email is not the correct format!');
    return;
  }
  if (req.body.email.length === 0 || !emailRegexp.test(req.body.email)) {
    res.send('Email is not the correct format!');
    return;
  }
  if (!req.body.password) {
    res.send('You must typing password!');
    return;
  }
  if (req.body.password.length === 0 || req.body.password === '') {
    res.send('You must typing password!');
    return;
  }
  next();
}

module.exports =  { authenticateToken, checkId, checkUserCreate } ;