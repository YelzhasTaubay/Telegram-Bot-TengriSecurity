const httpStatus = require('http-status');
const { Subscription } = require('../models');
const ApiError = require('../utils/ApiError');


const createSubscription = async (subBody) => {

    return Subscription.create(subBody);
};


const getSubscriptionById = async (id) => {
    const subscription = await Subscription.findById(id);
    return subscription;
};

const getSubscriptionByUserIdAndChannelId = async (user, channel) => {
    const subscription = await Subscription.findOne({
        user: user,
        channel: channel,
    });
    return subscription;
}



const getAllSubscriptions = async () => {
    return Subscription.find();
}



module.exports = {
    createSubscription,
    getSubscriptionById,
    getAllSubscriptions,
    getSubscriptionByUserIdAndChannelId,
}
