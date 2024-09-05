const express = require('express');
const getBooks = require('../controllers/getBooks')
const addBook = require('../controllers/addBook')
const deleteBook = require('../controllers/deleteBook')
const router = express.Router();


router.get('/',getBooks);
router.post('/addBook', addBook)
router.post('/deleteBook/:id', deleteBook)


module.exports = router;