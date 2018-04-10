const express = require('express');
const router = express.Router();
const knex = require('../db/knex');



router.get('/', (req, res)=>{
  knex('authors')
    .then((authors)=>{
      res.render('authors/index', {authors});
    });
});

router.get('/:id', (req, res)=>{
  knex('authors')
    .where('id', req.params.id)
    .then((author)=>{
      res.render('authors/single', {author})
    });
});

router.get('/:id/edit', (req, res)=>{
  knex('authors')
  .where('id', req.params.id)
  .then((author)=>{
    res.render('authors/edit', {author})
  });
});

router.get('/new', (req, res)=>{
  res.render('authors/new');
});



router.post('/', (req, res)=>{
  knex('authors')
  .insert(req.body)
  .then((author)=>{
    res.redirect('/authors')
  });
});

router.put('/:id', (req, res)=>{
  knex('authors')
  .where('id', req.params.id)
  .insert(req.body)
  .then((author)=>{
    res.redirect('/authors')
  });
});

router.delete('/:id', (req, res)=>{
  knex('authors')
  .where('id', req.params.id)
  .del()
  .then(()=>{
    res.redirect('/authors')
  })
})








module.exports = router;
