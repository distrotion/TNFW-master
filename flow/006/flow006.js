const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow006', async (req, res) => {

    res.json("testflow6");
})

//------------------------------------------------ user

router.post('/set_04_1call', (req, res) => {
    console.log("-------- set_04 --------");
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
})





module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





