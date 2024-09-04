const express = require('express');
const getBooks = require('../controllers/getBooks')
const router = express.Router();

// router.get('/',()=>{
//     res.render('homePage',{getBooks})
//     // getBooks()  
//     // do a render here to display all books
// } )


router.get('/',getBooks)


module.exports = router;