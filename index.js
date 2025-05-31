const express = require("express");
const http = require('http');
const body_parser =  require('body-parser');
const app = express();
const query = require("./Database/UserQuery");
query.q();
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}));
//routes part 
const routes = require("./Routes/routes");
const user = require("./Routes/Userroutrs");
app.use(routes);
app.use(user);
// const addcol = require('./Database/AddColumnSchema');
// addcol.AddColumn('users','password','text');

app.listen(3000,()=>{
    console.log('app running on port 300')
})
