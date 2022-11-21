const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/', (req, res) => {
    console.log("Not")
    res.render("index", { text: "World"})
    //res.send('Hi') // it will appear on the server the Hi string

    //res.sendStatus(500) // Internal Server Error

    //res.status(500).send("Hi") // This will give on inspect 
    // and on console the 500(Internal server error)

    //res.status(500).json({ message: 'error'}) // this will give us on the server: { "message": "error"}
    
    //res.download("server.js") // this will automatically donwload on my
    //hard drive the serves.js file

    //res.render('index', { text : 'World' }) 
    //res.render('index', { text212313: "Word"})
})

/* Routers */

/*  

router.get('/users', ( req, res ) => {
    res.send("User list")
})

router.get ('/users/new', ( req, res ) => {
    res.send("User new Form")
})*/


const useRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const deleteRouter = require('./routes/delete')


app.use('/users', useRouter)
app.use('/posts', postRouter)
app.use('/delete', deleteRouter)

app.listen(3001) // this will the make our server actually run