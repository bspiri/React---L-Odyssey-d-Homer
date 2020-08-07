const express = require("express");
const router = express.Router();
const connection = require('../../helpers/db.js');
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const proxy = require('./setupProxy');

router.post('/signup', function (req, res, next) {
    const formdata = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        lastname: req.body.lastname,
    };
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, formdata, (error, results) => {
        if (error) {
            res.status(400).json({ flash: error.message });
        } else {
            res.status(200).json({ flash: "User has been signed up!" });
        }
    });
});

router.post('/signin', (req, res) => {

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        if (!user) {
            return res.status(400).json({ message: info.flash });
        }
        const token = jwt.sign(JSON.stringify(user), 'your_jwt_secret');
        return res.json({ user, token });
    })(req, res)
})

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},

    function (jwtPayload, cb) {
        return cb(null, jwtPayload);
    }
));

module.exports = router;