const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
      throw new ApiError(response.status, errorData.error || `HTTP ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }

    // Network or other errors
    console.error("API request failed:", error)
    throw new ApiError(0, "Network error - please check if the backend server is running")
  }
}

// Boat API functions
export async function fetchBoats() {
  return apiRequest("/boats")
}

export async function fetchBoatById(id: string) {
  return apiRequest(`/boats/${id}`)
}

// Booking API functions
export async function createBooking(bookingData: any) {
  return apiRequest("/bookings", {
    method: "POST",
    body: JSON.stringify(bookingData),
  })
}

export async function fetchBookings() {
  return apiRequest("/bookings")
}

export async function fetchBookingById(id: string) {
  return apiRequest(`/bookings/${id}`)
}

// Health check
export async function checkApiHealth() {
  return apiRequest("/health")
}
