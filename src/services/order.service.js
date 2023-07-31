const httpStatus = require('http-status');
const { Order} = require('../models');
const ApiError = require('../utils/ApiError');


const createOrder = async (orderBody) => {

    return Order.create(orderBody);
};

const getOrderById = async (id) => {
    const order = await Order.findById(id);
    return order;
};

const getAllOrders = async () => {
    return Order.find();
}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
}
