var express = require('express');
const morgan = require('morgan');
const router = require('./public/routes/user');
const app = express();
app.use(morgan('short'));
app.use(router);
app.use('/public', express.static('public/views'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/views/create.html');
    // res.send("Hello guys welcome to our root nodeJs");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>{
    console.log("server express listen to the port "+PORT);
});