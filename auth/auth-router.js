const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SafeRoutes = require('../routes/routes-model.js');
const secrets = require('../data/secrets');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;

    SafeRoutes.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            // console.log('error message=>', error.message)
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    SafeRoutes.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                //need a way to get that token
                const token = generateToken(user);
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            // console.log('error =>', error.message)
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        username: user.username,
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
