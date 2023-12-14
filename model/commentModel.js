const mongoose = require('mongoose');
const moment = require('moment');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    created_at: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
            return moment(createdAt).format('MMMM Do YYYY');
        },
    },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
