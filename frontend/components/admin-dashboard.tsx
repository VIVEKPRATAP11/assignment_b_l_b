"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users, Mail, Phone } from "lucide-react"
import { getBookings } from "@/lib/actions"
import type { Booking } from "@/lib/types"

export function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBookings = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getBookings()
        setBookings(data)
      } catch (error) {
        console.error("Failed to load bookings:", error)
        setError("Failed to load bookings. Please check if the backend server is running.")
      } finally {
        setLoading(false)
      }
    }

    loadBookings()
  }, [])

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.boatName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0)

  if (loading) {
    return <div className="text-center py-8">Loading bookings...</div>
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookings.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Booking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${bookings.length > 0 ? Math.round(totalRevenue / bookings.length) : 0}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <div className="flex gap-4">
            <Input
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          {filteredBookings.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {bookings.length === 0 ? "No bookings yet" : "No bookings match your search"}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{booking.boatName}</h3>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {booking.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {booking.startDate} to {booking.endDate}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {booking.guests} guests
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-2">
                          <div>
                            <p className="font-medium">{booking.guestName}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="w-4 h-4" />
                              {booking.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="w-4 h-4" />
                              {booking.phone}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">Confirmed</Badge>
                            <span className="font-bold text-lg">${booking.totalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {booking.specialRequests && (
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm font-medium">Special Requests:</p>
                        <p className="text-sm text-muted-foreground">{booking.specialRequests}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
