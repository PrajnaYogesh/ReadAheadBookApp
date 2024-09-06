const express = require('express');
// const methodOverride = require('method-override');
const app = express();
const allRoutes = require('./routes/bookRoutes')
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const requestTimeMiddleware = require('./middlewares/requestTimeMiddleware');
const PORT=8080;
const errorHandler = require('./middlewares/errorHandler');
// const booksData = require('./models/bookList')


app.set('view engine', 'ejs')
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method')); // Middleware to support HTTP verbs such as PUT or DELETE

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use(loggerMiddleware); // Logs details of each request
app.use(requestTimeMiddleware); // Adds request time to each request

app.get('/',allRoutes);
app.post('/addBook',allRoutes)
app.post('/deleteBook/:id',allRoutes)

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})