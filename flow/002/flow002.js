const express = require("express");
const router = express.Router();


router.get('/flow002', async (req, res) => {

    res.json("testflow2");
})


module.exports = router;





