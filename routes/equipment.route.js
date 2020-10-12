const express = require('express');
const router = express.Router();

const equipment_controller = require('../controllers/equipment.controller');

router.get('/get', equipment_controller.get);
router.post('/create', equipment_controller.create);
router.put('/get/:equipmentId', equipment_controller.getByEquipmentId);
router.put('/update', equipment_controller.update);
router.delete('/delete', equipment_controller.delete);
module.exports = router;