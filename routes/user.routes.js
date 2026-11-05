const express = require('express')
const router = express.Router()


/* /user/profile */

router.get('/register', (req, res) => {
    res.render('register')
})









module.exports = router