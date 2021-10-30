const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow001', async (req, res) => {

    res.json("testflow1");
})

//------------------------------------------------ user

router.post('/user_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
 
        Id: "user",
        Username: "AA",
        Password: "AA",
        Name: "AA",
        Section: "AA",
        RoleId: "AA",
    },
    {

        Id: "02x",
        Username: "BB",
        Password: "BB",
        Name: "BB",
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

    

    // let dbinput = `[test].[dbo].[Table01]`;
    // let querystring  = `SELECT * From '${dbinput}' where [user]='${input.user}'`;
    // db = await mssql.qurey(querystring);

    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})


//------------------------------------------------ Custommer data

router.post('/Customer_Data_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Custommer data",
        CustId: "f1",
        CustFull: "f2",
        CustShort: "f3",
        Branch: "f3",
        CODE: "f4",
   
    },
    ];

    let dbinput = `[test].[dbo].[Table01]`;
    let querystring  = `SELECT * From '${dbinput}' where [user]='${input.user}'`;
    // db = await mssql.qurey(querystring);

    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Frequency

router.post('/Frequency_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Frequency",
        FrequencyId: "f1",
        Frequency: "f2",
   
    },
    ];
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Routine Customer

router.post('/Routine_Customer_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Routine Customer",
        CustId: "AA",
        CustFull: "AA",
        CustShort: "AA",
        Branch: "AA",
        Code: "AA",
        FrequencyRequest: "AA",
        Incharge: "AA",
        SubLeader: "AA",
        GL: "AA",
        JP: "AA",
        DMG: "AA",
   
    },
    ];
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ GroupName

router.post('/GroupName_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "GroupName",
        GroupId: "AA",
        GroupName: "AA",

    },
    ];
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ SampleType

router.post('/SampleType_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "SampleType",
        GroupId: "AA",
        GroupName: "AA",
        SampleTypeId: "AA",
        SampleTypeName: "AA",

    },
    ];
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})


//------------------------------------------------ SampleName

router.post('/SampleName_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "SampleName",
        GroupId: "AA",
        GroupName: "AA",
        SampleTypeId: "AA",
        SampleTypeName: "AA",
        SampleId: "AA",
        SampleName: "AA",
    },
    ];
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Tank

router.post('/Tank_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Tank",
        TankId: "AA",
        TankName: "AA",
    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Instrument

router.post('/Instrument_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Instrument",
        InstrumentId: "BB",
        InstrumentName: "BB",
    },
    ];

    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Unit

router.post('/Unit_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "Unit",
        GroupId: "BB",
        GroupName: "BB",
        UnitId: "BB",
        UnitName: "BB",
    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ item

router.post('/item_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "item",
        InstrumentId: "AA",
        InstrumentName: "AA",
        ItemId: "AA",
        ItemName: "AA",
        Cost: "AA",
        Price: "AA",
        Unit1: "AA",
        Unit2: "AA",
        Unit3: "AA",
        Unit4: "AA",
        Unit5: "BB",
        Unit6: "BB",
        Unit7: "BB",
        Unit8: "BB",
        Unit9: "BB",
        Unit10: "BB",
    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ ItemGroup

router.post('/ItemGroup_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "ItemGroup",
        GroupId: "BB",
        GroupName: "BB",
        SampleTypeId: "BB",
        SampleTypeName: "BB",
        InstrumentId: "BB",
        InsrumentName: "BB",
        ItemId: "BB",
        ItemName: "BB",

    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

//------------------------------------------------ Routine_MasterCustomer

router.post('/Routine_MasterCustomer_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "R-MasterCustomer",
        CustId: "f1",
        CustFull: "f2",
        Branch: "f2",
        Code: "f2",
        FrequencyRequest: "f2",
        Incharge: "f2",
        SubLeader: "f2",
        GL: "f2",
        JP: "f2",
        DMG: "f2",

    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

router.post('/Routine_MasterLab_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "R-MasterLab",
        CustId: "f1",
        CustFull: "f2",
        CustShort: "f2",
        FrequencyRequest: "f2",
        SampleGroup: "f2",
        SampleType: "f2",
        SampleTank: "f2",
        SampleName: "f2",
        Frequency: "f2",

        ItemNo: "f2",
        Instrument: "f2",
        ItemName: "f2",
        Position: "f2",
        Mag: "f2",
        Temp: "f2",
        StdFactor: "f2",
        StdMax: "f2",
        StdMin: "f2",

    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})


router.post('/Routine_MasterTS_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "R-MasterTS",
        CustId: "f1",
        CustFull: "f2",
        CustShort: "f2",
        FrequencyRequest: "f2",
        SampleGroup: "f2",
        SampleType: "f2",
        SampleTank: "f2",
        SampleName: "f2",
        Frequency: "f2",

        ItemNo: "f2",
        Instrument: "f2",
        ItemName: "f2",
        Position: "f2",
        Mag: "f2",
        Temp: "f2",
        StdFactor: "f2",
        StdMax: "f2",
        StdMin: "f2",

    },
    ];
    
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})

module.exports = router;


