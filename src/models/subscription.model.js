const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        startDate: {
            type: Date,
            required: false,
        },
        endDate: {
            type: String,
            required: false,
        },
        isActive: {
            type: Boolean,
            required: false,
            default: false,
        },
        channel: {
            type: Schema.Types.ObjectId,
            ref: 'Channel',
        }
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef Subscription
 */
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
