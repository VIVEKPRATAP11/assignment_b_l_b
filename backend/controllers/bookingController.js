const { getBookings, findBookingById, addBooking } = require("../models/bookingModel")
const { findBoatById } = require("../models/boatModel")

/**
 * Get all bookings
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 */
async function getAllBookings(req, res, next) {
  try {
    const bookings = await getBookings()
    // Sort by creation date (newest first)
    const sortedBookings = bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    res.json(sortedBookings)
  } catch (error) {
    next(error)
  }
}

/**
 * Get booking by ID
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 */
async function getBookingById(req, res, next) {
  try {
    const booking = await findBookingById(req.params.id)

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" })
    }

    res.json(booking)
  } catch (error) {
    next(error)
  }
}

/**
 * Create a new booking
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 */
async function createBooking(req, res, next) {
  try {
    // Validate required fields
    const requiredFields = ["boatId", "guestName", "email", "startDate", "endDate"]
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` })
      }
    }

    // Verify boat exists
    const boat = await findBoatById(req.body.boatId)
    if (!boat) {
      return res.status(400).json({ error: "Invalid boat ID" })
    }

    // Create booking
    const newBooking = await addBooking(req.body)
    res.status(201).json(newBooking)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
}
