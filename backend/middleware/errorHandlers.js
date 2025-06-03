/**
 * 404 Not Found handler
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
function notFoundHandler(req, res) {
  res.status(404).json({ error: "Route not found" })
}

/**
 * Global error handler
 * @param {Error} err - Error object
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 */
function errorHandler(err, req, res, next) {
  console.error("Error:", err)

  const statusCode = err.statusCode || 500
  const message = err.message || "Something went wrong"

  res.status(statusCode).json({
    error: message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  })
}

module.exports = {
  notFoundHandler,
  errorHandler,
}
