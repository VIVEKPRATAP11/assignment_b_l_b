require("dotenv").config()
const path = require("path")

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  dataPath: {
    boats: path.join(__dirname, "..", "data", "boats.json"),
    bookings: path.join(__dirname, "..", "data", "bookings.json"),
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
}
