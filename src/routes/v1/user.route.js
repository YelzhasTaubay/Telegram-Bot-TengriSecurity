const express = require('express');
const userController = require('../../controllers/user.controller');


const router = express.Router();

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.route('/:userId')
    .get(userController.getUser)


module.exports = router;
