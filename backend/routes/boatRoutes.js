const express = require("express")
const { getAllBoats, getBoatById } = require("../controllers/boatController")

const router = express.Router()

// GET /api/boats
router.get("/", getAllBoats)

// GET /api/boats/:id
router.get("/:id", getBoatById)

module.exports = router
