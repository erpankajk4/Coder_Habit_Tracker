const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/login', userController.getLoginPage);

router.get('/register', userController.getRegisterPage);

router.post('/register', userController.postRegister);

router.post('/login', userController.postLogin);

router.get('/logout', userController.logout);

module.exports = router;
