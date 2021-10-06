const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow004', async (req, res) => {

    res.json("testflow4");
})

//------------------------------------------------ user

router.post('/user_delete', (req, res) => {
    console.log("-------- user_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Custommer data

router.post('/Custommer_data_delete', (req, res) => {
    console.log("-------- Custommer data_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Frequency

router.post('/Frequency_delete', (req, res) => {
    console.log("-------- Frequency_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine Customer

router.post('/Routine_Customer_delete', (req, res) => {
    console.log("-------- Routine_Customer_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ GroupName

router.post('/GroupName_delete', (req, res) => {
    console.log("-------- GroupName_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ SampleType

router.post('/SampleType_delete', (req, res) => {
    console.log("-------- SampleType_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ SampleName

router.post('/SampleName_delete', (req, res) => {
    console.log("-------- SampleName_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Tank

router.post('/Tank_delete', (req, res) => {
    console.log("-------- Tank_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Instrument

router.post('/Instrument_delete', (req, res) => {
    console.log("-------- Instrument_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Unit

router.post('/Unit_delete', (req, res) => {
    console.log("-------- Unit_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ item

router.post('/item_delete', (req, res) => {
    console.log("-------- item_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ ItemGroup

router.post('/ItemGroup_delete', (req, res) => {
    console.log("-------- ItemGroup_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterCustomer

router.post('/Routine_MasterCustomer_delete', (req, res) => {
    console.log("-------- Routine_MasterCustomer_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterLab

router.post('/Routine_MasterLab_delete', (req, res) => {
    console.log("-------- Routine_MasterLab_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterTS

router.post('/Routine_MasterTS_delete', (req, res) => {
    console.log("-------- Routine_MasterTS_delete --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

module.exports = router;





