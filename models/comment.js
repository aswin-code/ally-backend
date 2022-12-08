const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    postid: String,
    comments: [{ userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, comment: String }]
})

const commentModel = mongoose.model('comments', commentSchema)

module.exports = commentModel