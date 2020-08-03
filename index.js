const express = require('express')
const morgan = require('morgan')
const body_parser = require('body-parser')
const user_routes = require('./routes/users')

const app = express();
app.use(morgan('dev'))
app.use(express.json())
app.use(body_parser.urlencoded({extended: false}))
app.use(user_routes)
app.use(express.static('./public'));

app.get('/', (request, response) => {
    response.end()
    
  })

  app.get('/users', (request, response) => {
    response.end()
    
  })
app.listen(3333, () => {
    console.log('The server is running on port 3333')
  })