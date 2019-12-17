const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();
const axios = require('axios');
var fetch = require('node-fetch');
const request = require("request");
const cheerio = require("cheerio");


const apiKey = 'ylWZpzDKQzy9dNjihciEpgtXJWMRHo3H'; // business
// var pipl = require('pipl')(apiKey);
var supermanFile = require("./superman.json")
var zaibaFile = require("./zaiba-info.json")
var jessicaFile = require("./jessica-info.json")
var tahminFile = require("./tahmin-info.json")
var shanjidaFile = require("./shanjida-info.json")
var dongniFile = require("./dongni-info.json")
var testFile = require("./jessica-business-info.json")

const URL_TO_PARSE = "http://10.0.1.12/LLL_readonly/user_handoff.php";


var testjson;
var fname, lname, uemail;


// VERSION 2 - TO BE USED WITH LIKELIKELOVE
// router.get('/api/search', (req, res) => {
//     var status = '';
//     // Make a request to get the HTML of the page
//     request(URL_TO_PARSE, (err, response, body) => {
//         if (err) throw new Error("Something went wrong");
//         // Load the HTML into cheerio's DOM
//         const $ = cheerio.load(body);
//         // Print the latest user
//         console.log($("h1").text()); // firstname
//         console.log($("h2").text()); // lastname
//         console.log($("h3").text()); // email address

//             // if first name stored is not equal to first name in database
//         if(uemail !== $("h3").text()){
//           // store name, pipl query and store file
//           status = 'New Person Detected';
//           fname = $("h1").text();
//           lname = $("h2").text();
//           uemail = $("h3").text();

//           console.log("First name is:" + fname);

//         // axios.get(`https://api.pipl.com/search/?person={"names":[{"first": "${fname}","last": "${lname}"}],"emails":[{"address": "${uemail}"}],"addresses":[{"country":"US", "state": "NY"}]}&key=${apiKey2}`).then(person => {
          
//     };
//   })
//         res.send(status);  
//   });


// VERSION 1 - TO BE USED WITHT PIPL
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
