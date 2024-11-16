/* *******************************
 * Required Resources
 * *******************************/
const express = require('express');
const router = express.Router();
const contactsCont = require('../controllers/contacts');

/* *******************************
 * Get Routes
 * *******************************/
router.get('/contacts', contactsCont.getAll);

router.get('/:id', contactsCont.getSingle);

/* *******************************
 * POST Routes
 * *******************************/
router.post('/', contactsCont.createNewContact);

/* *******************************
 * PUT Routes
 * *******************************/
router.put('/:id', contactsCont.updateContact);

/* *******************************
 * DELETE Routes
 * *******************************/
router.delete('/:id', contactsCont.deleteContact);

module.exports = router;