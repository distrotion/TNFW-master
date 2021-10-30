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
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB","CC","DD","FF"],"list02": ["","AA","BB","CC","DD","FF"],"list03": ["","AA","BB","CC","DD","FF"],"list04": ["","AA","BB","CC","DD","FF"],"list05": ["","AA","BB","CC","DD","FF"],"list06": ["","AA","BB","CC","DD","FF"],"list07": ["","AA","BB","CC","DD","FF"]}}];
    res.json(output)
})

router.post('/set_06', (req, res) => {
    console.log("-------- set_06 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];
    res.json(output)
})

router.post('/set_07', (req, res) => {
    console.log("-------- set_07 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];
    res.json(output)
})

router.post('/set_10', (req, res) => {
    console.log("-------- set_10 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];
    res.json(output)
})

router.post('/set_11', (req, res) => {
    console.log("-------- set_11 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];
    res.json(output)
})

router.post('/set_12', (req, res) => {
    console.log("-------- set_12 --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    // output = [{ "status": "ok","output":{ "list01": ["","A1-12","A2-12","A3-12"],"list02": ["","B1-12","B2-12","B3-12"],"list03": ["","C1-12","C2-12","C3-12"]}}];
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"],"list04": ["","AA","BB"]}}];
    res.json(output)
})



module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





