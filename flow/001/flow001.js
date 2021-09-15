const express = require("express");
const router = express.Router();
const axios = require('axios')





router.get('/flow001', (req, res) => {

    res.send('Hello World from flow 001')
})



module.exports = router;


