/* ******************************
 * Required Resources
 * ******************************/
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')


/* ******************************
 * Lesson 1 Routes
 * ******************************/
//routes.get('/', lesson1Controller.chrisRoute);
routes.get('/', (req, res,) => {
    //swagger.tags=['Hello world']
    res.send('Hello World');
})
routes.get('/haydon', lesson1Controller.haydonRoute);
routes.get('/jonathan', lesson1Controller.jonathanRoute);

/* ******************************
 * Use route for contacts CSE-Project-1/contacts
 * ******************************/
routes.use('/contacts', require('./contacts'));
routes.use('/', require('./contacts'));


module.exports = routes;