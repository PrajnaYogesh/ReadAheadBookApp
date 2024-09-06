function loggerMiddleware(req, res, next) {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next(); // Pass control to the next middleware function
}

module.exports = loggerMiddleware;