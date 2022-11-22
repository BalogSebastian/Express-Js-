const express = require('express');
const routerPosts = require('./posts');
const routerUsers = express.Router()

//routerUsers.use(logger);

// routerPosts.get("/newForm", (req, res) => {
//     res.render("users/new", { firstName: "Sebi"})
// })


routerUsers.get('/', ( req, res ) => {
    console.log(req.query.name)
    res.send("User list")
})

routerUsers.get ("/new", ( req, res ) => {
    res.render("users/new")
})

routerUsers.get("/veryNew", ( req, res) => {
    res.render("users/veryNew")
})

routerUsers.post('/', ( req, res) => { 
    const isValid = true;
    if (isValid) {
        users.push({ firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    //res.send("Create User")
    }
})

routerUsers
    .route('/:id').get( ( req, res) => {
        console.log(req.user)
    //res.params.id
    res.send(`Get User with Id ${req.params.id}`) // this will print out the get User Id with 2
}).post( ( req, res) => {
    //res.params.id
    res.send(`Updated User with Id ${req.params.id}`) // this will print out the get User Id with 2
}).delete(( req, res) => {
    //res.params.id
    res.send(`Delete User with Id ${req.params.id}`) // this will print out the get User Id with 2
})
// routerUsers.get('/:id', ( req, res) => {
//     //res.params.id
//     res.send(`Get User with Id ${req.params.id}`) // this will print out the get User Id with 2
// })
// routerUsers.put('/:id', ( req, res) => {
//     //res.params.id
//     res.send(`Updated User with Id ${req.params.id}`) // this will print out the get User Id with 2
// })
// routerUsers.delete('/:id', ( req, res) => {
//     //res.params.id
//     res.send(`Delete User with Id ${req.params.id}`) // this will print out the get User Id with 2
// })
const users = [ { name: "Kyle"}, { name: "Sally"}];
routerUsers.param("id", (req, res, next, id) => {
    //console.log(id) // this will console log the on the console ( terminal
    // the id number such as example : 3,4,5,6,7...
    req.user = users[id] 
    next();
}) 

//  function logger(req,res) {
//      console.log(req.originalUrl) 
//     }

module.exports = routerUsers