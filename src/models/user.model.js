const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        tgUid: {
           type: String,
           required: true,
           unique: true,
        },
        userName: {
            type: String,
            required: false,
            trim: true,
        },
        phone: {
            type: String,
            required: false,
        },
        firstName: {
            type: String,
            required: false,
            trim: true,
        },
        secondName: {
            type: String,
            required: false,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
