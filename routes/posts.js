const express = require('express');
const router = express.Router();

// Route for /posts


router.get('/', (req, res) => {
  res.send('Posts Page');
});

// Route for /posts/new


router.get('/new', (req, res) => {
  res.send('Create a new post');
});
module.exports = router;
