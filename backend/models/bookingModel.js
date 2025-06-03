const { readJsonFile, writeJsonFile } = require("./dataService")
const config = require("../config")

/**
 * Get all bookings
 * @returns {Promise<Array>} Array of booking objects
 */
async function getBookings() {
  return readJsonFile(config.dataPath.bookings)
}

/**
 * Find booking by ID
 * @param {string} id - Booking ID
 * @returns {Promise<Object|null>} Booking object or null if not found
 */
async function findBookingById(id) {
  const bookings = await getBookings()
  return bookings.find((booking) => booking.id === id) || null
}

/**
 * Add a new booking
 * @param {Object} bookingData - Booking data
 * @returns {Promise<Object>} Created booking object
 */
async function addBooking(bookingData) {
  const bookings = await getBookings()

  const newBooking = {
    ...bookingData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }

  bookings.push(newBooking)
  await writeJsonFile(config.dataPath.bookings, bookings)

  return newBooking
}

module.exports = {
  getBookings,
  findBookingById,
  addBooking,
}
