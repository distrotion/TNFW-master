const express = require("express");
const router = express.Router();

var mongodb = require('./../../function/mongodb');


x=0
y=0

router.get('/flow001', (req, res) => {

    res.send('Hello World from flow 001')
})

router.get('/test123', (req, res) => {
   if(y==1){
    res.send(`no`)
   }else{

   }
    x++
    res.send(`${x}`)
})

router.get('/mongotest', async (req, res) => {
  
  // var output = await mongodb.insertMany("test","doc01",[{"data":2,"test":"haha"}]);
  // var output = await mongodb.find("test","doc01",{"data":2});
  var upd = await mongodb.update("test","doc01",{ "data":2 }, { $set: { b: 777 } });
  var output = await mongodb.find("test","doc01",{"data":2});
  res.json(output)
})

module.exports = router;