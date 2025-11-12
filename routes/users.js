const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users Page');
});

router.get('/new', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
