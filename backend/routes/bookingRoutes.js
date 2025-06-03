const express = require("express")
const { getAllBookings, getBookingById, createBooking } = require("../controllers/bookingController")

const router = express.Router()

// GET /api/bookings
router.get("/", getAllBookings)

// GET /api/bookings/:id
router.get("/:id", getBookingById)

// POST /api/bookings
router.post("/", createBooking)

module.exports = router
