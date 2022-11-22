First i had to create this folder then i just had to open a terminal to write down : npm install express to install the express node modules than i write down
: npm install --save-dev nodemon as a dev dependency => this will help us restart the server easely anytime we decide to make changes in our website ( I say that
we will not have to restart it manually ).
When we paste on the terminal the npm run devStart it will automatically runs the server.js with nodemon
We are going to use ejs as our wiew engine it is the most similiar => npm install ejx on the terminal
<%= 2 + 2%> his will output something on the screen on the server; this is something that called ejs writing ...
A router is essentially a way for you to create another instance of application that is own little mini application that has all of its own logic applied to it and you can kind of just insert it into this main application 
When i talk about routes and if i start writing : routerUsers.get('/:id') => this is when i want to work on all id-s
Then next on the server routh thing is that if i called this function run the next in line is because param right here is essentially a type of middleware.
Middleware inside of express is stuff that runs between the request being sent to your server and actual response being returned to user.
Middleware runs from top to bottom. What is actually hapening is that, the first middleware we insert is our logger then we greate this git request here then we set up our router for users so everything comes after this logger midleware which means everything uses it.
app.use(express.urlencoded( extended: true)) => will allows us to acces information coming from forms and we have to add this spoiler plate to it.
If you make a fetch from the client to the server or a json request, or a calling an Api , this ( app.use(express.json())), allow you to parse json information from the body.






