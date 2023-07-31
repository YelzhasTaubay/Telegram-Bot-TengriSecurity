const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subscriptionService } = require('../services');


const createSubscription = catchAsync(async (req, res) => {
    const user = await subscriptionService.createSubscription(req.body);
    res.status(httpStatus.CREATED).send(user);
});

const getSubscription = catchAsync(async (req, res) => {
    const subscription = await subscriptionService.getSubscriptionById(req.params.subscriptionId);
    if (!subscription) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Subscription not found');
    }
    res.send(subscription);
});

const getAllSubscriptions = catchAsync(async (req, res) => {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.send(subscriptions);
});

module.exports = {
    createSubscription,
    getSubscription,
    getAllSubscriptions,
};
