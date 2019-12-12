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
var dongniFile = require("./dongni-info.json")
var testFile = require("./jessica-business-info.json")



var testjson;
var fname, lname, uemail;

router.get('/api/search', (req, res) => {
    const { first_name, last_name, email } =  req.query;
    console.log(`We're searching for ${first_name} ${last_name}`);
    fname = first_name;
    lname = last_name;
    uemail = email;

    // axios.get(`https://api.pipl.com/search/?person={"names":[{"first": "${first_name}","last": "${last_name}"}],"emails":[{"address": "${email}"}],"addresses":[{"country":"US", "state": "NY"}]}&key=${apiKey}`).then(person => {
    //   console.log(person.data);
    //   testjson = person.data;
    //   res.send(testjson);
    // }).catch((error) => {
    //   console.log(error);
    // })


        res.send('Completed' + uemail);
    
  
  });

  
router.get('/api/send-data', (req, res ) => {
  console.log(fname);
      if(fname == 'Zaiba'){
      testjson = zaibaFile;
      res.send(testjson);
    }
    else if(fname == 'Jessica'){
      testjson = jessicaFile;
      res.send(testjson);
    }
    else if(fname == 'Shanjida'){
      testjson = shanjidaFile;
      res.send(testjson);
    }
    else if(fname == 'Tahmin'){
      testjson = tahminFile;
      res.send(testjson);
    }
    else if(fname == 'Dongni'){
      testjson = dongniFile;
      res.send(testjson);
    }else{
      testjson = testFile;
      res.send(testjson);
    }
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

