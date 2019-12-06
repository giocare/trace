const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();
const axios = require('axios');


const apiKey = '8hrynoykepgbnur73yrj396z'; // business
// var pipl = require('pipl')(apiKey);
var supermanFile = require("./superman.json")
var zaibaFile = require("./zaiba-info.json")
var jessicaFile = require("./jessica-info.json")
var tahminFile = require("./tahmin-info.json")
var shanjidaFile = require("./shanjida-info.json")

var testjson;

router.get('/api/search', (req, res) => {
    const { first_name, last_name, email } =  req.query;
    console.log(`We're searching for ${first_name}`);
    // pipl.search.query(
    //   {
    //     "email": email, 
    //     "first_name": first_name, 
    //     "last_name": last_name, 
    //     "country" : 'US', 
    //     "state": 'NY',
    //     "minimum_match": '0.5'
    // }, function(err, data) {
    //   console.log(data);
    //   testjson = data;
    //   res.send(testjson);
    // });

    axios.get(`https://api.pipl.com/search/?person={"names":[{"first": "${first_name}","last": "${last_name}"}],"emails":[{"address": "${email}"}],"addresses":[{"country":"US", "state": "NY"}]}&key=${apiKey}`).then(person => {
      console.log(person.data);
      testjson = person.data;
      res.send(testjson);
    }).catch((error) => {
      console.log(error);
    })
  
  });


  
router.get('/api/send-data', (req, res ) => {
    res.send(testjson);
  })
  

module.exports = router;



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

