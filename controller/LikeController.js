
const postModel = require('../models/postMdel');

exports.like = async (req, res) => {
    try {
        const found = await postModel.findById(req.params.postid)
        console.log(found)
        found.Like.find((e) => e === req.user) ? found.Like = found.Like.filter((e) => e !== req.user) : found.Like = [...found.Like, req.user];
        await found.save()
        res.status(201).json({ message: 'liked a post' })
    } catch (error) {
        console.log(error)
    }
}