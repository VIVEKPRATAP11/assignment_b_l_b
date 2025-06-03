const { readJsonFile } = require("./dataService")
const config = require("../config")

/**
 * Get all boats
 * @returns {Promise<Array>} Array of boat objects
 */
async function getBoats() {
  return readJsonFile(config.dataPath.boats)
}

/**
 * Find boat by ID
 * @param {string} id - Boat ID
 * @returns {Promise<Object|null>} Boat object or null if not found
 */
async function findBoatById(id) {
  const boats = await getBoats()
  return boats.find((boat) => boat.id === id) || null
}

module.exports = {
  getBoats,
  findBoatById,
}
