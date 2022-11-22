const express = require('express')
const app = express()

//app.set('view engine','ejs')

app.use(express.static('public'));
// /test/tt.html will appear on the screen the Come on string 
app.set('view engine','ejs');

app.use(express.urlencoded({extended: true})) // forms

app.use(express.json())

// app.get("/",(req,res) => {
//     app.get(express.static("public"))
// })



//app.use(logger); => in this we will console log the logger in the console log

//app.get('/',/*logger, logger, logger*/ (req, res) => {
    //console.log("Not")
    //res.render("index", { text: "World"})
    //res.send('Hi') // it will appear on the server the Hi string

    //res.sendStatus(500) // Internal Server Error

    //res.status(500).send("Hi") // This will give on inspect 
    // and on console the 500(Internal server error)

    //res.status(500).json({ message: 'error'}) // this will give us on the server: { "message": "error"}
    
    //res.download("server.js") // this will automatically donwload on my
    //hard drive the serves.js file

    //res.render('index', { text : 'World' }) 
    //res.render('index', { text212313: "Word"})
//})

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

// function logger(req,res,next) {
//     console.log(req.originalUrl)
//     next()
// }// this will actually console.log the location of where we are 

app.listen(3001) // this will the make our server actually run