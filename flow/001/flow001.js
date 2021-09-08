const express = require("express");
const router = express.Router();

x=0
y =0

router.get('/flow001', (req, res) => {

    res.send('Hello World from flow 001')
})

router.get('/test123', (req, res) => {
   if(y==1){
    res.send(`no`)
   }else{
y=1
//------------------------



//------------------------
y=0
   }
    x++
    res.send(`${x}`)
})

module.exports = router;