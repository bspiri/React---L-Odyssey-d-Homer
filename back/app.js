// declare all the necessary libraries
const authRouter = require('./routes/auth/auth');
const http = require('http');
const path = require('path');
const express = require('express');
const connection = require('./helpers/db.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");

// set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRouter); //where authRouter is imported

app.get("/user", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.send(req.user);
});
app.get("/profile", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.send(req.user);
});

// Passport strategy
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, cb) {
        const sql = `SELECT email from USERS WHERE email='${email}' and password='${password}'`;
        connection.query(sql, (error, users) => {
            if (error) {
                return cb(null, false, { flash: error.message });
            } else {
                if (users) {
                    return cb(null, users[0], { flash: "User has been logged in!" });
                } else {
                    return cb(null, false, { flash: "Wrong email or password!" });
                }
            }
        });
    }
));



// implement the API part
app.get("/", (req, res) => {
    res.send("youhou");
})
/// in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + server.address().port);
});