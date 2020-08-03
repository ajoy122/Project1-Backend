/**
 * Contains all user related Routes
 */
const mysql = require('mysql')
const express = require('express');
const { request, response } = require('express');
const router = express.Router()
module.exports = router;

function getNewConnection() {
    return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: '202004_im215_group1',
    })
    }

// create user
router.post('/user', (request,response) =>{
   
    console.log(request.body)
    console.log(request.body.first_name)
    response.sendStatus(501)
})

// update user
router.post('/user', (request,response) =>{
    console.log('from patch')
    console.log(request.body)
    console.log(request.body.first_name)
    response.sendStatus(501)
})

// return list of all users
router.get('/users', (request,response) =>{
    const connection = getNewConnection()
    const queryString = 'select * from users_signup'
    // console.log(queryString)
    connection.query(queryString, (err, rows, fields) => {
        console.log('Got Response from Database Server')
        if (err != null) {
          console.error(err);
          response.sendStatus(500);
        }
    
        console.log(rows)
        response.json(rows)
      })
      console.log('defined qery and calll back')
    // response.sendStatus(501)
})