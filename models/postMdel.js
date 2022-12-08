const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image: String,
    caption: String,
    Like: [String]

})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel