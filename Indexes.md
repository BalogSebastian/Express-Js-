First i had to create this folder then i just had to open a terminal to write down : npm install express to install the express node modules than i write down
: npm install --save-dev nodemon as a dev dependency => this will help us restart the server easely anytime we decide to make changes in our website ( I say that
we will not have to restart it manually ).
When we paste on the terminal the npm run devStart it will automatically runs the server.js with nodemon
We are going to use ejs as our wiew engine it is the most similiar => npm install ejx on the terminal
<%= 2 + 2%> his will output something on the screen on the server; this is something that called ejs writing ...
A router is essentially a way for you to create another instance of application that is own little mini application that has all of its own logic applied to it and you can kind of just insert it into this main application 
When i talk about routes and if i start writing : routerUsers.get('/:id') => this is when i want to work on all id-s