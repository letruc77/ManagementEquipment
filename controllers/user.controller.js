const UserService = require('../services/user.service');
const jwt = require("jsonwebtoken");
const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const login = async (req, res) => {
    try {
      connection.connection();
      const user = await UserService.findOneUser(req.body.email);
      if (!user) {
        return res.status(400).send('User not found!');
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(400).send('Incorrect password!');
          }
          const token = jwt.sign({ email: user.email },process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '24h' });
          return res.status(200).send({
            email: user.email,
            token: token
          });
        }
      )
    } catch (error) {
      return res.status(400).send(error);
    }
};

const create = async (req, res) => {
  try {
    return res.status(200).send(await UserService.createUser(req.body));
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getEquipmentByUserId = async (req, res) => {
    try {
      return res.status(200).send(await UserService.getEquipmentByUserId(req.params.userId));
    } catch (error) {
      return res.status(400).send(error);
    }
};

module.exports =  { login, create, getEquipmentByUserId };
