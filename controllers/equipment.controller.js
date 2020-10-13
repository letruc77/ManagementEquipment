const { deleted } = require('../services/equipment.service');
const EquipmentService = require('../services/equipment.service');

const get = async (req, res) => {
    try {
        return res.status(200).send(await EquipmentService.get(req.body));
    } catch (error) {
        return res.status(400).send(error);
    }
};

const create = async (req, res) => {
    try {
        return res.status(200).send(await EquipmentService.create(req.body));
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getByEquipmentId = async (req, res) => {
    try {
        return res.status(200).send(await EquipmentService.getEquipmentById(req.body.id));
    } catch (error) {
        return res.status(400).send(error);
    }
};

const update = async (req, res) => {
    try {
        return res.status(200).send(await EquipmentService.update(req.params.id, req.body));
    } catch (error) {
        return res.status(400).send(error);
    }
};

const deleteEquipment = async (req, res) => {
    try {
        return res.status(200).send(await EquipmentService.deleteEquipment(req.params.id));
    } catch (error) {
        return res.status(400).send(error);
    }
};

module.exports = {get, create, getByEquipmentId, update, deleteEquipment};