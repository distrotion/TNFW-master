const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow003', async (req, res) => {

    res.json("testflow3");
})

//------------------------------------------------ user

router.post('/user_insert', (req, res) => {
    console.log("-------- user_insert --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Custommer data

router.post('/Customer_Data_insert', (req, res) => {
    console.log("-------- Custommer data --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Frequency

router.post('/Frequency_insert', (req, res) => {
    console.log("-------- Frequency --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine Customer

router.post('/Routine_Customer_insert', (req, res) => {
    console.log("-------- Routine Customer --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ GroupName

router.post('/GroupName_insert', (req, res) => {
    console.log("-------- GroupName --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ SampleType

router.post('/SampleType_insert', (req, res) => {
    console.log("-------- SampleType --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ SampleName

router.post('/SampleName_insert', (req, res) => {
    console.log("-------- SampleName --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Tank

router.post('/Tank_insert', (req, res) => {
    console.log("-------- Tank --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Instrument

router.post('/Instrument_insert', (req, res) => {
    console.log("-------- Instrument --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Unit

router.post('/Unit_insert', (req, res) => {
    console.log("-------- Unit --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ item

router.post('/item_insert', (req, res) => {
    console.log("-------- item --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ ItemGroup

router.post('/ItemGroup_insert', (req, res) => {
    console.log("-------- ItemGroup --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})


//------------------------------------------------ Routine_MasterCustomer

router.post('/Routine_MasterCustomer_insert', (req, res) => {
    console.log("-------- Routine_MasterCustomer --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterLab

router.post('/Routine_MasterLab_insert', (req, res) => {
    console.log("-------- Routine_MasterLab --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterTS

router.post('/Routine_MasterTS_insert', (req, res) => {
    console.log("-------- Routine_MasterTS --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})


module.exports = router;





