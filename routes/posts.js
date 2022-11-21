const express = require('express')
const routerPosts = express.Router()

routerPosts.get('/something_new', ( req, res) => {
    res.send("Post List")
})

routerPosts.get("/nothin_new", ( req, res ) => {
    res.status(500).json({ message: 'Nothong_new'})
})

module.exports = routerPosts
