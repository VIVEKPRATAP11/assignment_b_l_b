export interface Boat {
  id: string
  name: string
  type: string
  location: string
  price: number
  capacity: number
  image: string
  description: string
}

export interface Booking {
  id: string
  boatId: string
  boatName: string
  location: string
  startDate: string
  endDate: string
  totalPrice: number
  guestName: string
  email: string
  phone: string
  guests: number
  specialRequests?: string
  createdAt: string
}

export interface FilterState {
  location: string
  priceRange: [number, number]
  type: string
}
