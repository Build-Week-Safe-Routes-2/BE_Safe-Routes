const express = require('express');
const helmet = require('helmet')
const SafeRoutes = require('./routes-model.js');
const restricted = require('../auth/restricted-middleware')
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.email
    res.status(200).json({ message: `Welcome!` });

    // res.send(`The hash for ${name} is ${hash}`)

});

// router.get('/data', restricted, (req, res) => {
//     db.select('*').from('info')
//         .then(acc => { res.status(200).json(acc) })
//         .catch(err => { res.json(err) })
// })

// router.get('/data/position', (req, res) => {
//     db('position')
//         .then(pos => { res.status(200).json(pos) })
//         .catch(err => { res.status(500).json(err) })
// })

router.get('/data', (req, res) => {
    db.select().from('position')
        .then((poS) => {
            // return 
            db.select().from('info')
                .then((infoS) => {
                    const insertobj = [];

                    infoS.map((info, i) => {
                        insertobj.push({
                            ...info,
                            position: {
                                ...poS[i]
                            }
                        })
                    })
                    res.status(200).json(insertobj)
                })
                .catch(err => { res.status(500).json(err) })

        })
        .catch(err => { res.status(500).json(err) })




    // db('position as p').findById(id)
    // db('position as p')
    //     .leftJoin('info as i', 'i.id', 'p.pos_id')
    //     .then(pos => { res.status(200).json(pos) })
    //     .catch(err => { res.status(500).json(err) })
})
module.exports = router;