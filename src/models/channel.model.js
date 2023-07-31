const mongoose = require("mongoose");

const channelSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            trim: true,
        },
        link: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef Channel
 */
const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
