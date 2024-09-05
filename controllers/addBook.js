const booksData = require('../models/bookList')

function addBook(req,res){
    // console.log(req.body);
  const {image,title,author,genre} = req.body;
  const newBook = {
    id : booksData.length?booksData[booksData.length-1].id+1 :1,
 url :image,
 bookName : title,
 author,
 genre
};
console.log("new id is:");

console.log(newBook.id);

booksData.push(newBook);
res.redirect('/');
}


module.exports = addBook