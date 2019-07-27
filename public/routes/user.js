var express = require('express');
const mysql = require('mysql');

const route = express.Router();
route.use('/public', express.static('./public/views'))



const connection = mysql.createConnection({
    host:'localhost',
    database:'atroha',
    user:'root'
});


/**
 * This apis uesrs
 * 
 * @returns json
 */
route.get('/api/users', (req, res) =>{
    var queryString = 'select * from users';
    connection.query(queryString, (err, row, field)=>{
        if(err){
            res.sendStatus(500);
            return
        }
        res.send(row);
    });
});


route.post('/create_user/', (req, res)=>{
    var queryString = "insert into users(name, email) values(?, ?)";
    connection.query(queryString, [req.body.username, req.body.email], (err, row, field)=>{
        // console.log(err);
        if(err){
            res.sendStatus(500);
            return;
        }
    }); 
    res.redirect('localhost:3003/api/users');
    res.end();
});

module.exports = route;


