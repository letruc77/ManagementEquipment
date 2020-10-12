const User = require('../models/model_user');
const Equipment = require('../models/model_equipment');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticateToken');

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { email: user.email },
              'ACCESS_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              email: user.email,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
};

exports.create = function (req, res, next) {
    User.findOne({email: req.body.email}, (err, user) => {
        if(user == null){
            bcrypt.hash(req.body.password, 10, function(err, hash){
                if (err) {return next(err);}
                const user = new User(req.body)
                user.password = hash;
                user.save((err, result) => {
                    if(err) {return res.json({err})}
                    res.json({user: result})
                })
            })
        }else{
            res.json({err: 'Email has been used'})
        }
    })
};

exports.getEquipmentByUserId = function (req, { authenticateToken, checkId } ,res) {
    Equipment.find({ userId: req.params.userId }, function (err, equipment) {
        if (err) return next(err);
        res.send(equipment);
    })
};