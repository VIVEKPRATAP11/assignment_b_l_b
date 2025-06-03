# Boat Booking API

Express.js backend for the Boat Booking Dashboard application.

## Folder Structure

\`\`\`
backend/
├── config/             # Configuration files
│   └── index.js        # Main config
├── controllers/        # Route controllers
│   ├── boatController.js
│   ├── bookingController.js
│   └── healthController.js
├── data/               # JSON data storage (created at runtime)
│   ├── boats.json
│   └── bookings.json
├── middleware/         # Express middleware
│   └── errorHandlers.js
├── models/             # Data models
│   ├── boatModel.js
│   ├── bookingModel.js
│   ├── dataInitializer.js
│   └── dataService.js
├── routes/             # API routes
│   ├── boatRoutes.js
│   ├── bookingRoutes.js
│   ├── healthRoutes.js
│   └── index.js
├── .env                # Environment variables
├── package.json        # Dependencies
├── README.md           # This file
└── server.js           # Entry point
\`\`\`

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Boats
- `GET /api/boats` - Get all boats
- `GET /api/boats/:id` - Get boat by ID

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get booking by ID
- `POST /api/bookings` - Create new booking

## Setup

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Create `.env` file:
   \`\`\`
   PORT=5000
   NODE_ENV=development
   \`\`\`

3. Run the server:
   \`\`\`
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   \`\`\`

## Data Storage

The API uses JSON files for data storage:
- `data/boats.json` - Boat information
- `data/bookings.json` - Booking records

These files are created automatically on first run.
