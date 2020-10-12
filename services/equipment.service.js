const Equipment = require('../models/model_equipment');
const connection = require('../database/connection');

exports.get = () => {
    try {
        connection.connection();
        Equipment.find(function (err, equipment) {
            if (err) return next(err);
            return equipment;
        });
        connection.disconnect();
    } catch (error) {
        console.log(`Error user.service get ${port}`);
        return error;
    }
}

exports.create = (equipment) => {
    try {
        connection.connection();
        let equipment = new Equipment(
            {
                name: equipment.name,
                status: equipment.status,
                description: equipment.status,
                userId: equipment.userId
            }
        );
        equipment.save(function (err) {
            if (err) {
                return next(err);
            }
            return true;
        })
        connection.disconnect();
    } catch (error) {
        console.log(`Error user.service create ${port}`);
        return error;
    }
}