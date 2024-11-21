/* ****************************
 * Required Resources
 * ****************************/
const { body, validationResult } = require('express-validator');
const moment = require('moment');
    const validate = {};

/* ****************************
 * Contacts Validation Rules
 * ****************************/
validate.contactsRules = () => {
    return[
        // firstName is required and must be a string
        body("firstName")// Look inside HTTPRequest for name-value pair, "firstName"
            .trim() // sanitizing function that removes whitespace at the beginning and end of the incoming string
            .escape() // finds any special character and transforms it to an HTML entity rendering it not operational as code.
            .notEmpty() // validator ensuring that a value exists.
            .isLength({ min: 1 }) // validator checking for specified length requirement.
            .withMessage('Please provide a first name.'),

        // lasName is required and must be a string
        body("lastName") //Looks inside HTTPRequest for name-value pair, "lastName"
            .trim() // sanitizing function that removes whitespace at the beginning and end of the incoming string
            .escape() // finds any special character and transforms it to an HTML entity rendering it not operational as code.
            .notEmpty() // validator ensuring that a value exists
            .isLength({ min: 1 })
            .withMessage('Please provide a last name.'),

        // valid email is required and cannot already exist in the DB
        body("email") // Looks inside HTTPRequest for name-value pair, "email"
            .trim()
            .escape()
            .notEmpty()
            .isEmail() // function that checks the string for characters that should be present in a valid email address.
            .normalizeEmail() //sanitization function that makes all email lowercase, as well as additional alterations to "canonicalize" an email.
            .withMessage('Please provide a valid email.'),
           
        // favoriteColor is required and must be a string
        body("favoriteColor")
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 2 })
            .withMessage('Please provide your favorite color.'),

        // birthday is required
        body("birthday")
            .matches(/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/) //Regex for MM-DD-YYYY
            .withMessage('The date must be in MM-DD-YYYY format.')
            .custom((value) => {
                const inputDate = moment(value, 'MM-DD-YYYY', true);
                const today = moment();
                if(!moment(value, 'MM-DD-YYYY', true).isValid()) {
                    throw new Error('The date must be a valid calendar date.');
                }
                if (inputDate.isAfter(today, 'day')) {
                    throw new Error('The date must today or before today.')
                }
               
                return true;
            })
    ];
}

validate.validateContacts = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = validate