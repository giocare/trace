const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();

// router.post('/add', async (req, res) => {
//     if (isEmpty(req.body)) {
//         return res.status(403).json({
//             message: 'Body should not be empty',
//             statusCode: 403
//         });
//     }
//     const { name, position, company } = req.body;

//     const newUser = new User({
//         position,
//         name,
//         company,
//         date: Date.now()
//     });
//     try {
//         await newUser.save();
//         res.json({
//             message: 'Data successfully saved',
//             statusCode: 200,
//             name,
//             position,
//             company
//         });
//     } catch (error) {
//         console.log('Error: ', error);
//         res.status(500).json({
//             message: 'Internal Server error',
//             statusCode: 500
//         });
//     }
// });


// router.get('/users', async (req, res) => {

//     try {
//         const users = await User.find({});

//         return res.json({
//             users
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Internal Server error'
//         });
//     }
       
// });

const apiKey = '8hrynoykepgbnur73yrj396z'; // business
var pipl = require('pipl')(apiKey);
var supermanFile = require("./superman.json")
var zaibaFile = require("./zaiba-info.json")
var jessicaFile = require("./jessica-info.json")
var tahminFile = require("./tahmin-info.json")
var shanjidaFile = require("./shanjida-info.json")

var testjson;

router.get('/api/search', (req, res) => {
    const { first_name, last_name, email } =  req.query;
    console.log(`We're searching for ${first_name}`);
    pipl.search.query(
      {
        "email": email, 
        "first_name": first_name, 
        "last_name": last_name, 
        "country" : 'US', 
        "state": 'NY',
        "minimum_match": '0.5'
    }, function(err, data) {
      console.log(data);
      testjson = data;
      res.send(testjson);
    });
    // if(first_name == 'Zaiba'){
    //   testjson = zaibaFile;
    //   res.send(testjson);
    // }
    // else if(first_name == 'Jessica'){
    //   testjson = jessicaFile;
    //   res.send(testjson);
    // }
    // else if(first_name == 'Shanjida'){
    //   testjson = shanjidaFile;
    //   res.send(testjson);
    // }
    // else if(first_name == 'Tahmin'){
    //   testjson = tahminFile;
    //   res.send(testjson);
    // }else{
    //   testjson = supermanFile;
    //   res.send(testjson);
    // }


  
  });

router.get('/api/send-data', (req, res ) => {
    res.send(testjson);
  })
  

module.exports = router;