const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        amount: {
            type: Number,
            required: false,
        },
        status: {
            type: String,
            enum: ["INITIAL", "PAID", "CANCELED", "REFUND"],
            required: false,
            default: "INITIAL",
        },
        days: {
            type: Number,
            required: false,
            default: 0,
        },
        subscription: {
            type: Schema.Types.ObjectId,
            ref: 'Subscription',
        }
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
