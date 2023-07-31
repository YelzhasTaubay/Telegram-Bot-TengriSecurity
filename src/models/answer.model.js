const mongoose = require("mongoose");
const { Schema } = mongoose;

const answerSchema = mongoose.Schema(
    {
        value: {
            type: String,
            required: false,
        },
        isCorrect: {
            type: Boolean,
            required: false,
        },
        question: {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        }
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef Answer
 */
const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
