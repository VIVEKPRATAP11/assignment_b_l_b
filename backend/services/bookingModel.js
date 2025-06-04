const { readJsonFile, writeJsonFile } = require("./dataService")
const config = require("../config")

/**
 * Get all bookings
 */

async function getBookings() {
  return readJsonFile(config.dataPath.bookings)
}

/**
 * Find booking by ID
 */

async function findBookingById(id) {
  const bookings = await getBookings()
  return bookings.find((booking) => booking.id === id) || null
}

/**
 * Add a new booking
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
