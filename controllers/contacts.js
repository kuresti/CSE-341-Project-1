/* *******************************
 * Required Resources
 * *******************************/
const mongodb = require('../database/connectDB');
const ObjectId = require('mongodb').ObjectId;

/* ********************************
 * Get all from CSE-Project-1 Users
 * ********************************/
const getAll = async(req, res) => {
    const result = await mongodb.getDb().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

/* ********************************
 * Get single from CSE-Project-1 Users
 * ********************************/
const getSingle = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

/* ********************************
 * POST Create New Contact
 * ********************************/
const createNewContact = async(req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
   const response = await mongodb.getDb().collection('contacts').insertOne(newContact);
   if (response.acknowledged) {
    res.status(204).send();
   } else {
    res.status(500).json(response.error || 'An error occurred while creating a contact')
   }
};

/* ***********************************
 * PUT Update Contact
 * ***********************************/
const updateContact = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().collection('contacts').replaceOne({_id: contactId}, contact);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the contact.');
    }
};

/* ***********************************
 * DELETE Contact
 * ***********************************/
const deleteContact = async(req,res) => {
   const contactId = new ObjectId(req.params.id);
   const response = await mongodb.getDb().collection('contacts').deleteOne({ _id: contactId });
   if (response.deletedCount > 0) {
    res.status(204).send();
   } else {
    res.status(500).json(response.error || 'An error occurred while deleting contact.');
   }
};
 
    
   


module.exports = { getAll, getSingle, createNewContact, updateContact, deleteContact };