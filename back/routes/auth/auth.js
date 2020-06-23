const express = require("express");
const app = express();
const router = express.Router();
const connection = require('../../helpers/db.js');
const { request } = require('express');

app.get("/", (req, res) => {
    res.send("youhou");
})

router.post('/signup', function (req, res, next) {
    const formdata = req.body;
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, formdata, (err, results) => {
        if (err) {
            res.status(500).end();
            res.end();
        } else {
            res.json(results);
        }
    });
});

module.exports = router;