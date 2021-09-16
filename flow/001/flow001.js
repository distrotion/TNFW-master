const express = require("express");
const router = express.Router();


router.get('/flow001', (req, res) => {

    res.send('Hello World from flow 001')
})



module.exports = router;


