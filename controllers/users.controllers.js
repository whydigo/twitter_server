const User = require('../model/User.model')

module.exports.usersControllers = {
    addUsers: function (req, res) {
        User.create({
            name: req.body.name,
            info: req.body.info
        })
        .then(() => {
            res.json("Пользователь добавлен")
        })
        .catch({ error: ('Ошибка при добавлении пользователя') })
    },
    deleteUsers: function (req, res) {
        User.findByIdAndRemove(req.params.usersId).then(() => {
            res.json("deleted")
        }).catch({error: "not deleted"})
    },
    getUsers: function (req, res) {
        User.find()
        .then((users) => { res.json(users) })
        .catch({error: "not found"})
    }
}