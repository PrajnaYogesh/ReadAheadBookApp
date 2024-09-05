let booksData = require('../models/bookList')

 function deleteBook(req,res){
    const id = parseInt(req.params.id, 10);
    // console.log("delete this id");
    
    // console.log(id); // check if the id to be deleted is correct
    const updatedBooksData = booksData.filter(book => book.id !== id);
    booksData.length = 0; 
    booksData.push(...updatedBooksData);  //pushing to the original array
    // console.log("Books after deletion:");
    // console.log(booksData);

    res.redirect('/');
   
 }

 module.exports = deleteBook;