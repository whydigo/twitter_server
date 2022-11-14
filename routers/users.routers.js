const { Router } = require('express')
const { usersControllers } = require('../controllers/users.controllers')

const router = Router()

router.post('/', usersControllers.addUsers)
router.get('/', usersControllers.getUsers)
router.delete('/:usersId', usersControllers.deleteUsers)

module.exports = router