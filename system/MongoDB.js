module.exports = (dbname, host = 'localhost', port = 27017) => {
    const {MongoClient} = require('mongodb')
    const uri = `mongodb://${host}:${port}`
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return client
}