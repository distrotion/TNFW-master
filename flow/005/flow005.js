const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow005', async (req, res) => {

    res.json("testflow5");
})

//------------------------------------------------ user

router.post('/set_04', (req, res) => {
    console.log("-------- set_04 --------");
    console.log(req.body);
    //------------------------>>>
    

    //------------------------<<<
    // output = [{ "status": "ok","output":{ "list01": ["","A1-4","A2-4","A3-4"],"list02": ["","B1-4","B2-4","B3-4"],"list03": ["","C1-4","C2-4","C3-4"]}}];
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB","CC","DD","FF"],"list02": ["","B1-4","B2-4","B3-4"],"list03": ["","C1-4","C2-4","C3-4"]}}];
    res.json(output)
})

router.post('/set_06', (req, res) => {
    console.log("-------- set_06 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","A1-6","A2-6","A3-6"],"list02": ["","B1-6","B2-6","B3-6"],"list03": ["","C1-6","C2-6","C3-6"]}}];
    res.json(output)
})

router.post('/set_07', (req, res) => {
    console.log("-------- set_07 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","A1-7","A2-7","A3-7"],"list02": ["","B1-7","B2-7","B3-7"],"list03": ["","C1-7","C2-7","C3-7"]}}];
    res.json(output)
})

router.post('/set_10', (req, res) => {
    console.log("-------- set_10 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","A1-10","A2-10","A3-10"],"list02": ["","B1-10","B2-10","B3-10"],"list03": ["","C1-10","C2-10","C3-10"]}}];
    res.json(output)
})

router.post('/set_11', (req, res) => {
    console.log("-------- set_11 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","A1-11","A2-11","A3-11"],"list02": ["","B1-11","B2-11","B3-11"],"list03": ["","C1-11","C2-11","C3-11"]}}];
    res.json(output)
})

router.post('/set_12', (req, res) => {
    console.log("-------- set_12 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["A1-12","A2-12","A3-12"],"list02": ["B1-12","B2-12","B3-12"],"list03": ["C1-12","C2-12","C3-12"]}}];

    res.json(output)
})



module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





