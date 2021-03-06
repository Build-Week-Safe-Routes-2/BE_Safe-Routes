
const jwt = require('jsonwebtoken')
const secrets = require('../data/secrets')


module.exports = (req, res, next) => {
    const token = req.headers.authorization;


    if (token) {
        jwt.verify(token, 'secrets.jwtSecret', (err, decodedToken) => {
            if (err) {
                //token expired or is invalide
                res.status(401).json({ message: 'You shall not pass!' })
            } else {
                //token is good
                //maybe add the user to the req object
                req.user = { email: decodedToken.email }
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'no credentials provided' });
    }
};
