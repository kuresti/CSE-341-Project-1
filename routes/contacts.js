/* *******************************
 * Required Resources
 * *******************************/
const express = require('express');
const router = express.Router();
const contactsCont = require('../controllers/contacts');

/* *******************************
 * Get Routes
 * *******************************/
router.get('/', contactsCont.getAll);

router.get('/:id', contactsCont.getSingle);

module.exports = router;