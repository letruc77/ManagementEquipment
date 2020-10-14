const express = require('express');
const authentication = require('../middleware/authenticateToken');
const router = express.Router();

const equipment_controller = require('../controllers/equipment.controller');

router.get('/get', authentication.authenticateToken , equipment_controller.get);
router.post('/create', authentication.authenticateToken, equipment_controller.create);
router.get('/get/:id', (authentication.authenticateToken, authentication.checkId) , equipment_controller.getByEquipmentId);
router.put('/update/:id', (authentication.authenticateToken, authentication.checkId) , equipment_controller.update);
router.delete('/delete', authentication.authenticateToken , equipment_controller.deleteEquipment);
module.exports = router;