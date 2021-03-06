const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SafeRoutes = require('../routes/routes-model.js');
const secrets = require('../data/secrets');

// for endpoints beginning with /api/auth
// router.post('/register', (req, res) => {
//     let user = req.body;
//     const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
//     user.password = hash;

//     SafeRoutes.add(user)
//         .then(saved => {
//             res.status(201).json(saved);
//         })
//         .catch(error => {
//             // console.log('error message=>', error.message)
//             res.status(500).json(error);
//         });
// });

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;

    SafeRoutes.add(user)
        .then(saved => {
            const token = generateToken(user);
            res.status(200).json({ token });
        })
        .catch(error => {

            res.status(500).json(error);
        });
});


router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body;

    SafeRoutes.findBy({ email })
        .first()
        .then(user => {
            //check
            if (user && bcrypt.compareSync(password, user.password)) {

                const token = generateToken(user);
                // res.status(200).json({ token });
                res.status(200).json({ message: `Welcome ${user.email}!`, token });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});





function generateToken(user) {
    const payload = {
        email: user.email,
    }

    const options = {
        //expiration of the token
        expiresIn: '1d', //one day
    }
    return jwt.sign(payload, 'secrets.jwtSecret', options);
}

// async function verifyToken(req, res, next) {

//     const { token } = req

//     try {
//         const user = jwt.verify(token, 'secrets.jwtSecret')

//         if (user) {
//             next();
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'invalid access' });
//     }
// }

module.exports = router;
