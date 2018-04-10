const express = require('express');
const router = express.Router();
const knex = require('../db/knex');



router.get('/', (req, res)=>{
    knex('authors')
    .then((authors)=>{
      res.render('authors/index', {authors});
    });
});








module.exports = router;
