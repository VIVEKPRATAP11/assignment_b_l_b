const { readJsonFile } = require("./dataService")
const config = require("../config")

/**
 * Get all boats
 */

async function getBoats() {
  return readJsonFile(config.dataPath.boats)
}

/**
 * Find boat by ID
 */

async function findBoatById(id) {
  const boats = await getBoats()
  return boats.find((boat) => boat.id === id) || null
}

module.exports = {
  getBoats,
  findBoatById,
}
