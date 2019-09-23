const express = require('express');
const Register = require('./routes-model.js');
const restricted = require('../auth/restricted-middleware')
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {

    const name = req.query.name
    const hash = bcrypt.hashSync(name, 14) //the highest the number the most secure
    res.send(`The hash for ${name} is ${hash}`)

});

module.exports = router;