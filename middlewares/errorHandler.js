function errorHandler(err, req, res, next) {
    // console.error(err.stack); // Log the error stack to the console for debugging

    // Send a response to the client
    res.status(500).render('error', {
        message: 'There was an issue at this moment! Please try again later.',
        error: err
    });
}

module.exports = errorHandler;
