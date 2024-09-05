const express = require('express');
const app = express();
const allRoutes = require('./routes/bookRoutes')
const PORT=8080;
// const booksData = require('./models/bookList')


app.set('view engine', 'ejs')
app.use(express.static('public'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/',allRoutes);
app.post('/addBook',allRoutes)
app.post('/deleteBook/:id',allRoutes)

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})