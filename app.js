var express = require('express');
const morgan = require('morgan');
const router = require('./public/routes/user');
const body_parser = require('body-parser');
const app = express();
app.use(morgan('short'));
app.use(router);
app.use('/public', express.static('public/views'))
app.use(body_parser.urlencoded({extended:false}));



app.listen('3003', ()=>{
    console.log("server express listen to the port 3000");
});