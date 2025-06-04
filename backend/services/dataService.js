const fs = require("fs").promises

/**
 * Read and parse JSON file
 */

async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return []
  }
}

/**
 * Write data to JSON file
 */

async function writeJsonFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error)
    throw error
  }
}

module.exports = {
  readJsonFile,
  writeJsonFile,
}
