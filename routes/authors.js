const express = require('express');
const router = express.Router();
const knex = require('../db/knex');



router.get('/', (req, res)=>{
    knex('authors')
    .then((authors)=>{
      res.render('authors/index', {authors});
    });
});

router.get('/new', (req, res)=>{
  res.render('authors/new');
})



router.post('/', (req, res)=>{
  knex('authors')
  .insert(req.body)
  .then((author)=>{
    res.redirect('/authors')
  });
});








module.exports = router;
