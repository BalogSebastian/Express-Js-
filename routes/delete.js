const express = require('express')
const deleteRouter = express.Router()

deleteRouter.get('/', ( req, res ) => {
    //res.send("This block is deleted")
    res.status(501).json({ message: "This is deleted"})
})
deleteRouter.get('/something_is_deleted', ( req, res) => {
    res.status(501).json({ message: "Something special is deleted"})
})

module.exports = deleteRouter