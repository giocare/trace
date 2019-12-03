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

const apiKey = '1ak4al0qnz1u4tm5svgxqxp5'; // contact
var pipl = require('pipl')(apiKey);
var samplejsonFile = require("./superman.json")
var testjson;

router.get('/api/search', (req, res) => {
    const { first_name, last_name, email } =  req.query;
    //const Email =  req.body.email;
    console.log(`The result is ${last_name}`);
    // pipl.search.query(
    //   {
    //     "email": 'zaibaiqbal1@gmail.com', 
    //     "first_name": 'Zaiba', 
    //     "last_name": 'Iqbal', 
    //     "country" : 'US', 
    //     "state": 'NY',
    //     "minimum_match": '0.5'
    // }, function(err, data) {
    //   console.log(data);
    //   // res.json(data)
    // });
    testjson = samplejsonFile;
    res.send(testjson);
  
  });

router.get('/api/send-data', (req, res ) => {
    console.log("On Testing Page");
    res.send(testjson);
  })
  

module.exports = router;