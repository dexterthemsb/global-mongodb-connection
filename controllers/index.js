// Dependencies
const express = require('express')

// Global DB
let {
  GlobalConnection
} = require('../config/globalConnection')

// Initialize router
const router = express.Router()

// GET @ Home (An example route illustrating the process to access a collection form the database)
router.get('/', async (req, res) => {
  // const Collection = await GlobalConnection.db.collection('collections')
})

module.exports = router
