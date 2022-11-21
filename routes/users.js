const express = require('express')
const routerUsers = express.Router()

routerUsers.get('/', ( req, res ) => {
    res.send("User list")
})

routerUsers.get ('/new', ( req, res ) => {
    res.send("User new Form")
})

routerUsers.post('/', ( req, res) => { 
    res.send('Create User')
})

routerUsers.get('/:id', ( req, res) => {
    //res.params.id
    res.send(`Get User with Id ${req.params.id}`) // this will print out the get User Id with 2
})

module.exports = routerUsers