const express = require('express');
const app = express();
const allRoutes = require('./routes/bookRoutes')
const PORT=8080;
// const booksData = require('./models/bookList')


app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get('/',allRoutes);


app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})