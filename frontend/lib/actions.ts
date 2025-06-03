"use server"

import { createBooking as apiCreateBooking, fetchBookings as apiFetchBookings } from "./api"
import type { Booking } from "./types"

export async function createBooking(bookingData: Omit<Booking, "id" | "createdAt">) {
  try {
    return await apiCreateBooking(bookingData)
  } catch (error) {
    console.error("Failed to create booking:", error)
    throw new Error("Failed to create booking. Please try again.")
  }
}

export async function getBookings(): Promise<Booking[]> {
  try {
    return await apiFetchBookings()
  } catch (error) {
    console.error("Failed to fetch bookings:", error)
    return []
  }
}
