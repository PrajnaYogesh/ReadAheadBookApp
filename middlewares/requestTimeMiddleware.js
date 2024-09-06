function requestTimeMiddleware(req, res, next) {
    req.requestTime = new Date().toISOString(); // Add timestamp to request object
    next(); // Pass control to the next middleware function
}

module.exports = requestTimeMiddleware;