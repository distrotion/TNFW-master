const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow002', async (req, res) => {
  // console.log(mssql.qurey())
  console.log(req.body);
  var output = await mssql.qurey(`SELECT * From [test].[dbo].[Table01]`);
    res.json(output);
})

router.post('/login',async (req,res) => {
  //-------------------------------------
  console.log(req.body);
  //-------------------------------------
  input = req.body;  //<--------------------------
  output = {}
  if(input.user == "arsa"){
      if(input.password == '1234'){
          output.Status =  'ok';
          output.Roleid =  5;
          output.Name =  'Arsa';
      }else{
          output.Status =  'nok';
      }
      
  }else{
          output.Status =  'nok';
  }
  
  // msg.payload = output; //<--------------------------
  //-------------------------------------
    res.json(output);
});

router.post('/logindb',async (req,res) => {
  //-------------------------------------
  console.log(req.body);
  input = req.body; 
  output = {}
  //-------------------------------------
  var db = await mssql.qurey(`SELECT * From [test].[dbo].[Table01] where [user]='${input.user}'`);
  if(db === `er`){
    output.Status =  'nok';
    res.json(output);
  }
  
  console.log(db.recordset);

  if(db.recordset.length > 0){
    if(input.user === db.recordset[0].user){
      if(input.password === db.recordset[0].password){
        output.Status =  'ok';
        output.Roleid =  db.recordset[0].Roleid;
        output.Name =  db.recordset[0].user;
      }else{
        output.Status =  'nok'; 
      } 
    }else{
        output.Status =  'nok';
    }
  }else{
    output.Status =  'nok';
  }
  console.log(output);
  res.json(output);
});

module.exports = router;

//`SELECT * From [test].[dbo].[Table01]`



