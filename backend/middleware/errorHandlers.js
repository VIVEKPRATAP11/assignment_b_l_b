/**
 * 404 Not Found handler
 */

function notFoundHandler(req, res) {
  res.status(404).json({ error: "Route not found" })
}

/**
 * Global error handler
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
