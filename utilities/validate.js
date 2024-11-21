/* ****************************
 * Require Resources
 * ****************************/
//const Util = {}

/* ****************************
 * Middleware for handling errors
 * wrap other function in this for
 * general error handling.
 * ****************************/
const handleErrors = fn => (req, res, next) => {
    try{
        return Promise.resolve(fn(req, res, next)).catch(next)
    } catch (err) {
        next(err)
    }
}

module.exports = { handleErrors }
