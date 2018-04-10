const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/authors', (req, res)=>{
    knex('authors')
    .select('*')
    .then((data)=>{
      res.json(data);
    });
});




























module.exports = router;
