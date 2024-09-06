 const booksData = require('../models/bookList')

 function getBooks(req,res,next){

    try{
 // console.log(` data is ${booksData[0].id}`);
 console.log(`Request received at: ${req.requestTime}`);
 if (booksData.length > 0) {
    // Render the homePage.ejs view with the books data
    res.render('homePage', { books: booksData });
} else {
    // If no books data, render with an empty array or some message
    res.render('homePage', { books: [], message: 'No books data available' });
}
    }catch(error){
next(error)
    }
   
 }


 module.exports = getBooks