// Dependencies
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Global DB class
class GlobalConnection {
  static connectToMongoClient() {
    if (this.db) {
      return Promise.resolve(this.db)
    } else {
      let client = new MongoClient(this.url)
      client.connect((err) => {
        assert.equal(null, err)
        this.db = client.db(this.dbName)
        console.log('Connected successfully')
        return (this.db)
      })
    }
  }
}

// Global DB settings
GlobalConnection.db = null
GlobalConnection.dbName = process.env.DB_NAME
GlobalConnection.url = process.env.DB_HOST

module.exports = {
  GlobalConnection
}
