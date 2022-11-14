const { Router } = require('express')
const router = Router()

router.use('/comms', require('./comments.routers'))
router.use('/posts', require('./posts.routers'))
router.use('/users', require('./users.routers'))

module.exports = router