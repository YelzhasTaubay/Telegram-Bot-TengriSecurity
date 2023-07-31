const httpStatus = require('http-status');
const { Channel } = require('../models');
const ApiError = require('../utils/ApiError');


const createChannel = async (channelBody) => {

    return Channel.create(channelBody);
};


const getChannelById = async (id) => {
    const channel = await Channel.findById(id);
    return channel;
};

const getAllChannels = async () => {
    return Channel.find();
}



module.exports = {
    createChannel,
    getChannelById,
    getAllChannels,
}
