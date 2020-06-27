const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", function (req, res, next) {
    const data = req.body;
    connection.query("INSERT INTO users SET ?", data, function (err, results, fields) {
        if (err) {
            console.log(err);
            res.status(500).send("Error signing up");
        } else {
            res.status(200).send(results);
        }
    });
});

module.exports = router;