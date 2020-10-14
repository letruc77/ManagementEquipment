const Equipment = require('../models/model_equipment');
const connection = require('../database/connection');
const mongoose = require("mongoose");

const get = async (params) => {
    try {
        connection.connection();
        if (params === {}) {
            return await Equipment.find();
        } else {
            return await Equipment.find(params);
        }
    } catch (error) {
        return error;
    }
}

const create = async (body) => {
    try {
        connection.connection();
        const equipment = new Equipment(
            {
                name: body.name ? body.name : '',
                status: body.owner && mongoose.isValidObjectId(body.owner) ? true : false,
                description: body.description,
                owner: body.owner && mongoose.isValidObjectId(body.owner) ? body.owner : null
            }
        );
        equipment.save();
        return equipment;
    } catch (error) {
        return error;
    }
}

const getEquipmentById = async (id) => {
    try {
        connection.connection();
        return await Equipment.findById(id);
    } catch (error) {
        return error;
    }
}

const update = async (id, body) => {
    try {
        connection.connection();
        if (body.owner) {
            if (mongoose.isValidObjectId(body.owner)) {
                body.status = true;
            } else {
                body.status = false;
            }
        }
        await Equipment.findOneAndUpdate(id, {$set: body});
        return await getEquipmentById(id);
    } catch (error) {
        return error;
    }
}

const deleteEquipment = async (id) => {
    try {
        connection.connection();
        return await Equipment.findOneAndDelete(id);
    } catch (error) {
        return error;
    }
}

module.exports = {get, create, getEquipmentById, update, deleteEquipment};