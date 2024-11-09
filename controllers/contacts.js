/* *******************************
 * Required Resources
 * *******************************/
const mongodb = require('../database/connectDB');
const objectId = require('mongodb').ObjectId;

/* ********************************
 * Get all from CSE-Project-1 Users
 * ********************************/
const getAll = async(req, res) => {
    const result = await mongodb.getDb().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Typ', 'application/json');
        res.status(200).json(contacts);
    });
};

/* ********************************
 * Get single from CSE-Project-1 Users
 * ********************************/
const getSingle = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Typ', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

module.exports = { getAll, getSingle };