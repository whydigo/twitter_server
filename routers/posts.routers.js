const { Router } = require('express')
const { postsControllers } = require('../controllers/posts.controllers')

const router = Router()

router.patch('/:postsId', postsControllers.addLike)
router.patch('/:postsId', postsControllers.updatePosts)
router.post('/', postsControllers.addPosts)
router.get('/', postsControllers.getPosts)
router.delete('/:postsId', postsControllers.deletePosts)


module.exports = router