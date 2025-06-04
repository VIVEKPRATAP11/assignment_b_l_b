const healthRoutes = require("./healthRoutes")
const boatRoutes = require("./boatRoutes")
const bookingRoutes = require("./bookingRoutes")

/**
 * Set up all API routes
 */

function setupRoutes(app) {
  app.use("/api/health", healthRoutes)
  app.use("/api/boats", boatRoutes)
  app.use("/api/bookings", bookingRoutes)
}

module.exports = { setupRoutes }
