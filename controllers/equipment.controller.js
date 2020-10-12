const Equipment = require('../models/model_equipment');
const authenticateToken = require('../middleware/authenticateToken');


exports.get = function (req, authenticateToken , res) {
    Equipment.find(function (err, equipment) {
        if (err) return next(err);
        res.send(equipment);
    })
};

exports.create = function (req, authenticateToken, res) {
    let equipment = new Equipment(
        {
            name: req.body.name,
            status: req.body.status,
            description: req.body.status,
            userId: req.body.userId
        }
    );

    equipment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Equipment Created successfully')
    })
};

exports.getByEquipmentId = function (req, { authenticateToken, checkId }, res) {
    Equipment.findById(req.params.id, function (err, equipment) {
        if (err) return next(err);
        res.send(equipment);
    })
};

exports.update = function (req, res) {
    Equipment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, equipment) {
        if (err) return next(err);
        res.send('Equipment updated.');
    });
};

exports.delete = function (req, res) {
    Equipment.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};