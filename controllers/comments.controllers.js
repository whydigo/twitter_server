const Comments = require('../model/Comment.model')

module.exports.commentsControllers = {
    addComment: (req, res) => {
        Comment.create({
            user: req.body.user,
            text: req.body.text,
            post: req.body.likes
        }).then(() => {
            res.json("Комментарий добавлен");
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.commentId).then(comment => {
            res.json(comment)
        })
    },
    getCommentbyUserId: (req, res) => {
        Comment.find({ user: req.params.userId })
            .populate('user').then(comment => {
                res.json(comment)
            })
    },
    getComments: (req, res) => {
        Comment.find().populate('user')
            .then(comments => {
                res.json(comments)
            })
    },
}