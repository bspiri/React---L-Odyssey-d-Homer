const express = require("express");
const app = express();
const router = express.Router();

app.get("/", (req, res) => {
    res.send("youhou");
})

router.post('/signup', function (req, res, next) {
    res.send('I am in POST signup');
});

module.exports = router;