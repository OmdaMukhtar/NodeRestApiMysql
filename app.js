var express = require('express');
const morgan = require('morgan');
const router = require('./public/routes/user');
const app = express();
app.use(morgan('short'));
app.use(router);
app.use('/public', express.static('public/views'))

<<<<<<< HEAD
app.get('/', (req, res)=>{
=======
app.get('/', ()=>{
>>>>>>> 8267928d5980ddfe0f5897c7f2d77ec50dc8e0bc

    res.send("Hello guys welcome to our root nodeJs");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>{
    console.log("server express listen to the port "+PORT);
});