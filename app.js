var express = require('express');
const morgan = require('morgan');
const router = require('./public/routes/user');
const app = express();
app.use(morgan('short'));
app.use(router);
app.use('/public', express.static('public/views'))

app.get('/', ()=>{
    resizeBy.send("Hello guys welcome to our root nodeJs");
});

app.listen('3003', ()=>{
    console.log("server express listen to the port 3000");
});