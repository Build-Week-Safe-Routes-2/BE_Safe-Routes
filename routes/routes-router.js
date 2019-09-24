const express = require('express');
const helmet = require('helmet')
const SafeRoutes = require('./routes-model.js');
const restricted = require('../auth/restricted-middleware')
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.username
    res.status(200).json({ message: `Welcome!` });

    // res.send(`The hash for ${name} is ${hash}`)

});

router.get('/data', restricted, (req, res) => {
    db.select('*').from('info')
        .then(acc => { res.status(200).json(acc) })
        .catch(err => { res.json(err) })
})
module.exports = router;