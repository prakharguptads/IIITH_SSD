const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const query = new Schema({
    exam_name: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    question_num: {
        type: Number,
        required: true
    },
    ta_roll: {
        type: String,
        required: false
    },
    std_roll: {
        type: String,
        required: false
    },
    ta_comment: {
        type: String,
        required: false
    },
    std_comment: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false
    },
}, {
    timestamps: true,
});

const Query = mongoose.model('Query', query);

module.exports = Query;