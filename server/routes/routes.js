const { response } = require('express')
const express = require('express')
const router = express.Router()
const register = require('../models/register')

router.post('/register', (req,res) => {
    const registerUser = new register({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    registerUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router
module.exports = router