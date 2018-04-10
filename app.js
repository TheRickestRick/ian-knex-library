// var express = require("express");
// var app = express();
const knex = require('./db/knex.js');


knex.select('*').from('authors').then(function(data){
  console.log(data);
})

//
// module.exports = {
//   app
// }
