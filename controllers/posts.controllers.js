const Post = require('../model/Post.model')
const { post } = require('../routers')

module.exports.postsControllers = {
    addPosts: function (req, res) {
        Post.create({
            text: req.body.text,
            user: req.body.user,
            likes: req.body.likes
        })
            .then((post) => {
                res.json(post)
            })
            .catch({ error: ('Ошибка при добавлении поста') })
    },
    deletePosts: function (req, res) {
        Post.findByIdAndRemove(req.params.postsId).then(() => {
            res.json("deleted")
        }).catch({ error: "not deleted" })
    },
    getPosts: function (req, res) {
        Post.find()
            .populate('user')
            .populate('comment')
            .then((posts) => { res.json(posts) })
            .catch({ error: "not found" })
    },
    updatePosts: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            user: req.body.user,
            likes: req.body.likes
        }, {new: true}).then( posts => {
            res.json(posts)
        })
    },
    addLike: (req, res) => {
        Post.findByIdAndUpdate({ _id: req.params.id }, { $push: { likes: req.body.likes } }, { new: true })
            .then((data) => {
                res.json(data)
            })
    }
}