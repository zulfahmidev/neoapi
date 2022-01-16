const express = require('express')
const app = express()
const router = express.Router()
const mongodb = require("./MongoDB")
const path = require('path')

// Environment
const env = require('dotenv').config().parsed;

// MongoDB
const db = mongodb(env.DB_NAME, env.DB_HOST, env.DB_PORT);

// Database Connection
db.connect((err, client) => {

    let db = null;
    if (!err) {

        // Use Database
        db = client.db(env.DB_NAME);
        console.log('Your database is connected!')

        // Router
        require('../app/config/router')(app,router,db)
        app.use('/api', router)
    
        // Public Dir
        app.use(express.static(path.join(__dirname,'../app/public')))
    
        // Server
        app.listen(env.SERVER_PORT, function() {
            console.log('Server listen at http://localhost:'+env.SERVER_PORT)
        })

        client.close()
    }else {
        console.warn('Your database failed to connected!')
    }
})