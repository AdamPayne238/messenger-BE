const router = require('express').Router()

// Define Routes
// const authRouter = require()

// Use Routes

router.get('/', (req, res) => {
    res.json({ api: 'running' })
})

module.exports = router