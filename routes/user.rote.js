const express = require('express');
const authentication = require('../middleware/authenticateToken');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.post('/login', user_controller.login);
router.post('/create', authentication.checkUserCreate, user_controller.create);
router.get('/get/:userId', (authentication.authenticateToken, authentication.checkId) , user_controller.getEquipmentByUserId);
module.exports = router;