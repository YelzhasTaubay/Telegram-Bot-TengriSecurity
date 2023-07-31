const express = require('express');
const subscriptionController = require('../../controllers/subscription.controller');


const router = express.Router();

router.route('/')
    .get(subscriptionController.getAllSubscriptions)
    .post(subscriptionController.createSubscription)

router.route('/:subscriptionId')
    .get(subscriptionController.getSubscription)


module.exports = router;
