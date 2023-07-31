const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
    {
        value: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
