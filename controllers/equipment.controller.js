const EquipmentService = require('../services/equipment.service');

exports.get = function (req, res) {
    try {
        res.send(EquipmentService.get());
    } catch (error) {
        console.log(`Error equipment.controller get ${error}`);
    }
};

exports.create = function (req, res) {
    try {
        const rs = EquipmentService.create(req.body);
        if (rs) {
            res.send('Equipment Created successfully');
        } else {
            res.send(`Equipment Created error ${rs}`);
        }
    } catch (error) {
        console.log(`Error equipment.controller create ${error}`);
    }
};

exports.getByEquipmentId = function (req, res) {
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