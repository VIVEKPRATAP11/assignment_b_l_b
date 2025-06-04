const express = require("express")
const cors = require("cors")
const config = require("./config")
const { setupRoutes } = require("./routes")
const { errorHandler, notFoundHandler } = require("./middleware/errorHandlers")
const { initializeData } = require("./services/dataInitializer")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
setupRoutes(app)

// Error handling
app.use(notFoundHandler)
app.use(errorHandler)

// Initialize data and start server
initializeData()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`🚤 Boat Booking API Server running on port ${config.port}`)
      console.log(`📍 Health check: http://localhost:${config.port}/api/health`)
      console.log(`🛥️  Boats API: http://localhost:${config.port}/api/boats`)
      console.log(`📋 Bookings API: http://localhost:${config.port}/api/bookings`)
    })
  })
  .catch((error) => {
    console.error("Failed to initialize server:", error)
    process.exit(1)
  })
