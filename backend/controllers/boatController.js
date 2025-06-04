const { getBoats, findBoatById } = require("../models/boatModel")

/**
 * Get all boats
 */
async function getAllBoats(req, res, next) {
  try {
    const boats = await getBoats()
    res.json(boats)
  } catch (error) {
    next(error)
  }
}

/**
 * Get boat by ID
 */
async function getBoatById(req, res, next) {
  try {
    const boat = await findBoatById(req.params.id)

    if (!boat) {
      return res.status(404).json({ error: "Boat not found" })
    }

    res.json(boat)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllBoats,
  getBoatById,
}
