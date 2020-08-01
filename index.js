const express = require('express')
const morgan = require('morgan')
// const body_parser = require('body-parser')
// const user_routes = require('./routes/users')

const app = express();
app.use(morgan('dev'))
// app.use(express.json())

app.get('/', (request, response) => {
    response.end()
    
  })

app.listen(3333, () => {
    console.log('The server is running on port 3333')
  })