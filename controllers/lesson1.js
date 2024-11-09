/* *****************************
 * Send Chris Uresti
 * *****************************/
const chrisRoute = (req, res) => {
    res.send('Chris Uresti');
};

/* *****************************
 * Send Haydon Uresti
 * *****************************/
const haydonRoute = (req, res) => {
    res.send('Haydon Uresti');
};

/* *****************************
 * Send Jonathan Uresti
 * *****************************/
const jonathanRoute = (req, res) => {
    res.send('Jonathan Uresti');
};

module.exports = { chrisRoute, haydonRoute, jonathanRoute };