module.exports = (app, db) => (that = { 

    index(req, res) {
        let users = db.collection('users')
        users.find().toArray((e, r) => {
            res.send(that.text)
        })
    },
    
})