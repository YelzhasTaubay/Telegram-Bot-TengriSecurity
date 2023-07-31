const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');


const createUser = async (userBody) => {

    return User.create(userBody);
};


const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const getUserByTgUid = async (tgUid) => {
    const user = await User.findOne({
        tgUid
    });
    return user;
};

const getAllUsers = async () => {
    return User.find();
}



module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    getUserByTgUid,
}
