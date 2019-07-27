var express = require('express');
const mysql = require('mysql');

const route = express.Router();
route.use('/public', express.static('./public/views'))


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    database: 'atroha',
    user: 'root'
});


function getConnection() {
    return pool;
}


/**
 * This apis uesrs
 * 
 * @returns json
 */
route.get('/api/users', (req, res) => {
    var queryString = 'select * from users';
    getConnection().query(queryString, (err, row, field) => {
        if (err) {
            res.sendStatus(500);
            return
        }
        res.send(row);
    });
});

/**
 * Get user by id
 * 
 * @returns Object User
 */
route.get('/api/users/:id', (req, res) => {
    var queryString = "SELECT * FROM users WHERE id=?";
    getConnection().query(queryString, [req.params.id], (err, row, field) => {
        if (err) {
            res.send(err);
        }
        res.json(row);
    });
});


route.post('/create_user/', (req, res) => {
    var queryString = "insert into users(name, email) values(?, ?)";
    getConnection().query(queryString, [req.body.username, req.body.email], (err, row, field) => {
        // console.log(err);
        if (err) {
            res.sendStatus(500);
            return;
        }
    });
    res.redirect('localhost:3003/api/users');
    res.end();
});

module.exports = route;


