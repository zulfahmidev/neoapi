module.exports = function(app, router, db) {
    let ExampleController = require('../controllers/Example')(app, db);
    router.get('/user', ExampleController.index)
};