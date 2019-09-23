const express = require('express');
const helmet = require('helmet')
const SafeRoutes = require('./routes-model.js');
const restricted = require('../auth/restricted-middleware')
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.name
    res.status(200).json({ message: `Welcome person!` });

    // res.send(`The hash for ${name} is ${hash}`)

});

router.get('/users', (req, res) => {
    SafeRoutes.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});
module.exports = router;