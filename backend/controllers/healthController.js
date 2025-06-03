/**
 * Get API health status
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
function getHealthStatus(req, res) {
  res.json({
    status: "OK",
    message: "Boat Booking API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  })
}

module.exports = {
  getHealthStatus,
}
