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
        Username: "01",
        Password: "f3",
        Name: "f4",
        Section: "f5",
        RoleId: "f6",
    },
    {

        Id: "02x",
        Username: "01",
        Password: "f3",
        Name: "f4",
        Section: "f5",
        RoleId: "f6",
    },
    {

        Id: "03x",
        Username: "01",
        Password: "f3",
        Name: "f4",
        Section: "f5",
        RoleId: "f6",
    },
    {

        Id: "04x",
        Username: "01",
        Password: "f3",
        Name: "f4",
        Section: "f5",
        RoleId: "f6",
    },
    {

        Id: "05xxxxx",
        Username: "01",
        Password: "f3",
        Name: "f4",
        Section: "f5",
        RoleId: "f6",
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
        CustId: "f1",
        CustFull: "f1",
        CustShort: "f2",
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

//------------------------------------------------ GroupName

router.post('/GroupName_query', (req, res) => {
    // console.log(req.body);
    let input = req.body;


    let output_data = [{
        Id: "GroupName",
        GroupId: "f1",
        GroupName: "f2",

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
        GroupId: "f1",
        GroupName: "f2",
        SampleTypeId: "f2",
        SampleTypeName: "f2",

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
        GroupId: "f1",
        GroupName: "f2",
        SampleTypeId: "f2",
        SampleTypeName: "f2",
        SampleId: "f2",
        SampleName: "f2",
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
        TankId: "f1",
        TankName: "f2",
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
        InstrumentId: "f1",
        InstrumentName: "f2",
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
        GroupId: "f1",
        GroupName: "f2",
        UnitId: "f2",
        UnitName: "f2",
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
        InstrumentId: "f1",
        InstrumentName: "f2",
        ItemId: "f2",
        ItemName: "f2",
        Cost: "f2",
        Price: "f2",
        Unit1: "f2",
        Unit2: "f2",
        Unit3: "f2",
        Unit4: "f2",
        Unit5: "f2",
        Unit6: "f2",
        Unit7: "f2",
        Unit8: "f2",
        Unit9: "f2",
        Unit10: "f2",
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
        GroupId: "f1",
        GroupName: "f2",
        SampleTypeId: "f2",
        SampleTypeName: "f2",
        InstrumentId: "f2",
        InsrumentName: "f2",
        ItemId: "f2",
        ItemName: "f2",

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


