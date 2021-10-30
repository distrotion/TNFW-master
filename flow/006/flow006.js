const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow006', async (req, res) => {

    res.json("testflow6");
})

//------------------------------------------------ 04

router.post('/set_04_1call', async(req, res) => {
    console.log("-------- set_04_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
 
        Id: "user",
        Username: "AA",
        Password: "AA",
        Name: "AA3",
        Section: "AA",
        RoleId: "AA",
    },
    {

        Id: "02x",
        Username: "BB",
        Password: "BB",
        Name: "BB3",
        Section: "BB",
        RoleId: "BB",
    },
    {

        Id: "03x",
        Username: "CC",
        Password: "CC",
        Name: "CC",
        Section: "CC",
        RoleId: "CC",
    },
    {

        Id: "04x",
        Username: "DD",
        Password: "DD",
        Name: "DD",
        Section: "DD",
        RoleId: "DD",
    },
    {

        Id: "05xxxxx",
        Username: "FF",
        Password: "FF",
        Name: "FF",
        Section: "FF",
        RoleId: "FF",
    }
    ];

    let output_data_r = {'data01':'','data02':'','data03':'','data04':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['Username']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Username'];
            output_data_r['data02'] = output_data[i]['Name'];
            output_data_r['data03'] = output_data[i]['Section'];
            output_data_r['data04'] = output_data[i]['RoleId'];
            break
        }
        
    }

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

//------------------------------------------------ 06

router.post('/set_06_1call', async(req, res) => {
    console.log("-------- set_06_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['GroupName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupId'];
            output_data_r['data03'] = output_data[i]['GroupName'];
            break
        }   
    }

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

//------------------------------------------------ 07

router.post('/set_07_1call', async(req, res) => {
    console.log("-------- set_07_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['GroupName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupId'];
            output_data_r['data03'] = output_data[i]['GroupName'];
            break
        }   
    }

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

router.post('/set_07_2call', async(req, res) => {
    console.log("-------- set_07_2 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
        SampleTypeId: "AA",
        SampletTypeName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
        SampleTypeId: "BB",
        SampletTypeName: "BB",
    },
    
    ];


    let output_data_r = {'data01':'','data02':'','data03':'','data04':'','data05':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['SampletTypeName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupName'];
            output_data_r['data03'] = output_data[i]['SampleTypeId'];
            output_data_r['data04'] = output_data[i]['SampleTypeId'];
            output_data_r['data05'] = output_data[i]['SampletTypeName'];
            break
        }
        
    }

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

//------------------------------------------------ 10

router.post('/set_10_1call', async(req, res) => {
    console.log("-------- set_10_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['GroupName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupId'];
            output_data_r['data03'] = output_data[i]['GroupName'];
            break
        }   
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

//------------------------------------------------ 11

router.post('/set_11_1call', async(req, res) => {
    console.log("-------- set_11_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        InstrumentId: "AA",
        InstrumentName: "AA",
    },
    {
        Id: "2",
        InstrumentId: "BB",
        InstrumentName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['InstrumentName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['InstrumentId'];
            output_data_r['data03'] = output_data[i]['InstrumentName'];
            break
        }   
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

//------------------------------------------------ 12

router.post('/set_12_1call', async(req, res) => {
    console.log("-------- set_12_1 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['GroupName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupId'];
            output_data_r['data03'] = output_data[i]['GroupName'];
            break
        }   
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

router.post('/set_12_2call', async(req, res) => {
    console.log("-------- set_12_2 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "AA",
        SampleTypeId: "AA",
        SampletTypeName: "AA",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "BB",
        SampleTypeId: "BB",
        SampletTypeName: "BB",
    },
    
    ];


    let output_data_r = {'data01':'','data02':'','data03':'','data04':'','data05':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['SampletTypeName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupName'];
            output_data_r['data03'] = output_data[i]['SampleTypeId'];
            output_data_r['data04'] = output_data[i]['SampleTypeId'];
            output_data_r['data05'] = output_data[i]['SampletTypeName'];
            break
        }
        
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

router.post('/set_12_3call', async(req, res) => {
    console.log("-------- set_12_3 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        InstrumentId: "AA",
        InstrumentName: "AA",
    },
    {
        Id: "2",
        InstrumentId: "BB",
        InstrumentName: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['InstrumentName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['InstrumentId'];
            output_data_r['data03'] = output_data[i]['InstrumentName'];
            break
        }   
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});

router.post('/set_12_4call', async(req, res) => {
    console.log("-------- set_12_4 --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        InstrumentId: "AA",
        InstrumentName: "AA",
        ItemId: "AA",
        ItemName: "AA",
        Cost: "AA",
        Price: "AA",
    },
    {
        Id: "2",
        InstrumentId: "BB",
        InstrumentName: "BB",
        ItemId: "BB",
        ItemName: "BB",
        Cost: "BB",
        Price: "BB",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':'','data04':'','data05':'','data06':'','data07':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['ItemName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['InstrumentId'];
            output_data_r['data03'] = output_data[i]['InstrumentName'];
            output_data_r['data04'] = output_data[i]['ItemId'];
            output_data_r['data05'] = output_data[i]['ItemName'];
            output_data_r['data06'] = output_data[i]['Cost'];
            output_data_r['data07'] = output_data[i]['Price'];
            break
        }   
    }
    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});


module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





