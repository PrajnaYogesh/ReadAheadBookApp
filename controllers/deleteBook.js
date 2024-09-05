let booksData = require('../models/bookList')

 function deleteBook(req,res){
    const id = parseInt(req.params.id, 10);
    console.log("delete this id");
    
    console.log(id);
        booksData = booksData.filter(book => book.id !== id);
    console.log("2");
    res.redirect('/');
   
 }

 module.exports = deleteBook;