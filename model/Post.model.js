const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text: String,
    user: {
        ref: 'users',
        type: mongoose.SchemaTypes.ObjectId
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    }],
    comment: {
        ref: 'comments',
        type: mongoose.SchemaTypes.ObjectId
    }

})

const Post = mongoose.model('posts', postSchema)
module.exports = Post
