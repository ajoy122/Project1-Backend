/**
 * Contains all user related Routes
 */
const mysql = require('mysql')
const express = require('express');
const { request, response } = require('express');
const router = express.Router()
module.exports = router;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: '202004_im215_group1',
  })
  
function getNewConnection(){
  return pool;
}

// create user signup
router.post('/signup', (request,response) =>{
   
   
  const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into users_signup values (NULL, '${user.first_name}', '${user.last_name}', ${user.number},'${user.address}','${user.username}','${user.password}','${user.re_password}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Registration Sucessfull.", data:user});
    }
   
  })
})

//login
router.post('/signup/login', (request, response) => {
  const connection = getNewConnection();
  const user = request.body
  const queryString = 'select * from users_signup where username="'+user.username+'" and password = "'+user.password+'"';
  connection.query(queryString, (err, rows, fields) => {
    if (err != null) {
      console.error(err);
      response.sendStatus(500);
    } 
    else 
    {
      if(rows.length>0){
        response.send({status:true, message:"login successfully", data:rows[0]});
      } 
      else{
        response.send({status:false, message:"ERROR..please signup."});
      }
    }
  });
});

// return list of all users registration
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

/** Get User */
router.get('/user/:id', (request, response) => {
  const connection = getNewConnection()
  const queryString = `select * from users_signup where id = ${request.params.id}`

  connection.query(queryString, (err, rows, fields) => {
    console.log('Got Response from Database Server')
    if (err != null) {
      console.error(err);
      response.sendStatus(500);
    }

    if (rows.length == 0) {
      response.sendStatus(404)
    }

    response.json(rows[0])
  })
})

// Make reservation
router.post('/reservation', (request,response) =>{
   
   
  const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into reservation values (NULL, '${user.name}', '${user.email}', ${user.people},'${user.number}','${user.date}','${user.jazz_perfomance}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    // if (err != null) {
    //   console.error(err);
    //   response.sendStatus(500);
    // }
    //    // response.json(result)
    //  response.json({id: result.insertId})
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Reservation is confirmed.", data:user});
    }
   
  })
})

// Contact us
router.post('/contact', (request,response) =>{
   
   
  const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into contact values (NULL, '${user.name}','${user.number}','${user.email}','${user.message}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    // if (err != null) {
    //   console.error(err);
    //   response.sendStatus(500);
    // }
    
    // // response.json(result)
     
    //  response.json({id: result.insertId})
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Thank You for contacting us.", data:user});
    }
   
  })
})

// feedback
router.post('/feedback', (request,response) =>{
   
   
  const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into feedback values (NULL, '${user.service}','${user.food}','${user.clean}','${user.comments}','${user.name}','${user.email}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    // if (err != null) {
    //   console.error(err);
    //   response.sendStatus(500);
    // }
    
    // // response.json(result)
     
    //  response.json({id: result.insertId})
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Thank You for your feedback.", data:user});
    }
   
  })
})

// payment
router.post('/payment', (request,response) =>{
   
   
  const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into payment values (NULL, '${user.cardname}','${user.cardnumber}','${user.month}','${user.year}','${user.cvv}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    // if (err != null) {
    //   console.error(err);
    //   response.sendStatus(500);
    // }
    
    // // response.json(result)
     
    //  response.json({id: result.insertId})
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Payment successfull", data:user});
    }
   
  })
})

// choosing menu to order
router.post('/menu', (request,response) =>{
   
   const connection = getNewConnection()
  const user = request.body
  const queryString = `insert into menu values (NULL, '${user.drinks}','${user.dqty}','${user.snack}','${user.sqty}','${user.vegstr}','${user.vqty}','${user.nvegstr}','${user.nvqty}')`
  console.log(queryString)

  connection.query(queryString, (err, result, fields) => {
    console.log('Got Response from Database Server')
    // if (err != null) {
    //   console.error(err);
    //   response.sendStatus(500);
    // }
    
    // // response.json(result)
     
    //  response.json({id: result.insertId})
    if (err != null) {
      response.json({status:false, message:"Internal error occured.", data:err});
    }
    else {
      response.json({status:true, message:"Menu selected and choose your order type", data:user});
    }
   
  })
})

// return list of all menu selected
router.get('/menucart', (request,response) =>{
  const connection = getNewConnection()
  const queryString = 'select * from menu'
    connection.query(queryString, (err, rows, fields) => {
      console.log('Got Response from Database Server')
      if (err != null) {
        console.error(err);
        response.sendStatus(500);
      }
      console.log(rows)
      response.json(rows)
    })
   
})


