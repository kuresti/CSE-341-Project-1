/* *******************************
 * Required Resources
 * *******************************/
const express = require('express');
const router = express.Router();
const contactsCont = require('../controllers/contacts');
const validate = require('../validation/validation');
const { handleErrors } = require('../utilities/validate');


/* *******************************
 * Get Routes
 * *******************************/
router.get('/contacts', contactsCont.getAll);

router.get('/:id', contactsCont.getSingle);

/* *******************************
 * POST Routes
 * *******************************/
router.post(
    '/', 
    validate.contactsRules(),
    validate.validateContacts,
    handleErrors(contactsCont.createNewContact)
)
/* *******************************
 * PUT Routes
 * *******************************/
router.put('/:id', 
    validate.contactsRules(),
    validate.validateContacts,
    handleErrors(contactsCont.updateContact)
)
/* *******************************
 * DELETE Routes
 * *******************************/
router.delete('/:id', contactsCont.deleteContact);

module.exports = router;