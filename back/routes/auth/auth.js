const express = require("express");
const app = express();
const router = express.Router();
const connection = require('../../helpers/db.js');
// const { request } = require('express');

app.get("/", (req, res) => {
    res.send("youhou");
})

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
            res.status(500).json({ flash: error.message });
        } else
            res.status(200).json({ flash: "User has been signed up!" });
    });
});

module.exports = router;