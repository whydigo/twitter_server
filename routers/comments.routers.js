const { Router } = require('express')
const { commentsControllers } = require('../controllers/comments.controllers')

const router = Router()

router.post('/:postsId', commentsControllers.addComment)
router.get('/', commentsControllers.getComments)
router.get('/commentsId', commentsControllers.getCommentbyUserId)
router.delete('/:commentId', commentsControllers.deleteComment)


module.exports = router