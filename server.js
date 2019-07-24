// ENV config
require('dotenv').config()

// Dependencies
const express = require('express')

// Global DB variable
let { GlobalConnection } = require('./config/globalConnection')

// Initialize Express App
const app = express()

// Global DB
GlobalConnection.connectToMongoClient()

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Modules
const index = require('./controllers/index')

// Routing
app.use('/', index)

// Port
app.listen(process.env.PORT || 1803, () => {
  console.log('Server started at ' + process.env.PORT)
})
