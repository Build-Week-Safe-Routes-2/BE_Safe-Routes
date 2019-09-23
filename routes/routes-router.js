const express = require('express');
const helmet = require('helmet')
const Register = require('./routes-model.js');
const restricted = require('../auth/restricted-middleware')
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.name
    res.status(200).json({ message: `Welcome person!` });

    // res.send(`The hash for ${name} is ${hash}`)

});

module.exports = router;