const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    info: String,
})

const User = mongoose.model('users', userSchema)
module.exports = User