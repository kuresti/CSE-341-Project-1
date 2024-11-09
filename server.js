/* *********************************
 * Required assets
 * *********************************/
const express = require('express');
const app = express();
const env = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./database/connectDB')

/* **********************************
 * DotEnv configuration
 * **********************************/
env.config()

/* **********************************
 * Routes
 * **********************************/
app.use('/', require('./routes/index.js'));

/* **********************************
 * Port server is listening to
 * **********************************/
const port = process.env.PORT || 3000;

/* **********************************
 * Connect MongoDB
 * **********************************/
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`);
        });
        
    }
});
