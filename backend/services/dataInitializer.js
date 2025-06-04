const fs = require("fs").promises
const path = require("path")
const config = require("../config")

/**
 * Ensure data directory exists
 */
async function ensureDataDirectory() {
  const dataDir = path.join(__dirname, "..", "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

/**
 * Initialize boats data if it doesn't exist
 */
async function initializeBoatsData() {
  try {
    await fs.access(config.dataPath.boats)
  } catch {
    const boatsData = [
      {
        id: "1",
        name: "Ocean Majesty",
        type: "Yacht",
        location: "Miami, Florida",
        price: 1200,
        capacity: 12,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Luxurious 80ft yacht perfect for special occasions and corporate events. Features spacious deck, modern amenities, and professional crew.",
      },
      {
        id: "2",
        name: "Sea Breeze",
        type: "Sailboat",
        location: "San Diego, California",
        price: 450,
        capacity: 8,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Classic 45ft sailboat ideal for peaceful sailing adventures. Experience the joy of wind-powered cruising with stunning ocean views.",
      },
      {
        id: "3",
        name: "Paradise Explorer",
        type: "Catamaran",
        location: "Key West, Florida",
        price: 800,
        capacity: 16,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Spacious catamaran with dual hulls for stability. Perfect for snorkeling trips, sunset cruises, and group celebrations.",
      },
      {
        id: "4",
        name: "Thunder Wave",
        type: "Speedboat",
        location: "Lake Tahoe, Nevada",
        price: 350,
        capacity: 6,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "High-performance speedboat for thrill-seekers. Enjoy water sports, wakeboarding, and fast-paced lake adventures.",
      },
      {
        id: "5",
        name: "Sunset Serenity",
        type: "Yacht",
        location: "Newport Beach, California",
        price: 950,
        capacity: 10,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Elegant 65ft motor yacht with panoramic windows and luxury interiors. Perfect for romantic getaways and intimate gatherings.",
      },
      {
        id: "6",
        name: "Wind Dancer",
        type: "Sailboat",
        location: "Charleston, South Carolina",
        price: 380,
        capacity: 6,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Beautiful 38ft sailboat offering authentic sailing experience. Explore historic harbors and coastal waterways in style.",
      },
      {
        id: "7",
        name: "Aqua Adventure",
        type: "Catamaran",
        location: "Honolulu, Hawaii",
        price: 1100,
        capacity: 20,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Large catamaran perfect for island hopping and snorkeling tours. Features water slides, snorkel gear, and tropical refreshments.",
      },
      {
        id: "8",
        name: "Lightning Bolt",
        type: "Speedboat",
        location: "Miami Beach, Florida",
        price: 420,
        capacity: 8,
        image: "/placeholder.svg?height=250&width=400",
        description:
          "Sleek speedboat designed for coastal exploration and water sports. High-speed thrills with comfortable seating and sound system.",
      },
    ]
    await fs.writeFile(config.dataPath.boats, JSON.stringify(boatsData, null, 2))
  }
}

/**
 * Initialize bookings data if it doesn't exist
 */
async function initializeBookingsData() {
  try {
    await fs.access(config.dataPath.bookings)
  } catch {
    await fs.writeFile(config.dataPath.bookings, JSON.stringify([], null, 2))
  }
}

/**
 * Initialize all data files
 */
async function initializeData() {
  await ensureDataDirectory()
  await initializeBoatsData()
  await initializeBookingsData()
  console.log("✅ Data files initialized successfully")
}

module.exports = {
  initializeData,
}
