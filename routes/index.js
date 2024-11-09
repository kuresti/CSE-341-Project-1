/* ******************************
 * Required Resources
 * ******************************/
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

/* ******************************
 * Lesson 1 Routes
 * ******************************/
routes.get('/', lesson1Controller.chrisRoute);
routes.get('/haydon', lesson1Controller.haydonRoute);
routes.get('/jonathan', lesson1Controller.jonathanRoute);

/* ******************************
 * Use route for contacts CSE-Project-1/contacts
 * ******************************/
routes.use('/contacts', require('./contacts'));


module.exports = routes;