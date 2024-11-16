/* **************************
 * Required Resources
 * **************************/
const swaggerAutogen = require('swagger-autogen')();

/* **************************
 * Defines swagger doc
 * **************************/
const doc = {
    info: {
        title: 'My API',
        description: 'Contacts'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
};

/* ***************************
 * Routes
 * ***************************/
const outputFile = './swagger.json';
const endpointFiles = ['./routes/contacts.js']

/* ***************************
 * Generates swagger.json
 * ***************************/
swaggerAutogen(outputFile, endpointFiles, doc);