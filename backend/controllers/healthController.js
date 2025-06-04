/**
 * Get API health status
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
