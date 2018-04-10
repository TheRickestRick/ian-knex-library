const express = require('express');
const router = express.Router();
const knex = require('../db/knex');



router.get('/', (req, res)=>{
    knex('authors')
    .then((data)=>{
      res.render('authors/index', {data});
    });
});








module.exports = router;
