const router = require('express').Router()
const User = require('./diner-model')

// require restricted middleware when completed
// const restricted = require('')

// Check Roles
function checkRoles(roles){
    return function (req, res, next){
        if(roles.includes(req.decodeJwt.role)){
            next()
        } else {
            res.status(403).json({ message: "Your current role does not permit access"})
        }
    }
}

// GET
router.get('/', (req, res) => {
    User.find()
    .then(user => {
        res.json(user)
    })
    .catch(err => res.send(err))
})

// GET by ID
router.get('/:id', (req, res) => {
    const { id } = req.params

    User.findById(id)
    .then(user => {
        if(user){
            res.json(user)
        } else {
            res.status(404).json({ message: 'No User found with that ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get User'})
    })
})

// POST
router.post('/', (req, res) => {
    const userData = req.body

    User.add(userData)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new User'})
    })
})

// PUT
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    User.findById(id)
    .then(user => {
        if(user){
            User.update(changes, id)
            .then(updatedUser => {
                res.json(updatedUser)
            })
        } else {
            res.status(404).json({ message: 'Could not find a User with given ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update User'})
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params

    User.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted })
        } else {
            res.status(404).json({ message: 'Could not find a User with given ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete User'})
    })
})

module.exports = router