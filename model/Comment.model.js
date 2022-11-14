const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: String,
    user: {
        ref: 'users',
        type: mongoose.SchemaTypes.ObjectId
    },
    post: {
        ref: 'posts',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Comment = mongoose.model('comments', commentSchema)
module.exports = Comment