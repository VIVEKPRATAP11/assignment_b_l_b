"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { createBooking } from "@/lib/actions"
import { useRouter } from "next/navigation"
import type { Boat } from "@/lib/types"

interface BookingFormProps {
  boat: Boat
}

export function BookingForm({ boat }: BookingFormProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    return Math.max(1, days) * boat.price
  }

  const handleSubmit = async (formData: FormData) => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates")
      return
    }

    setIsSubmitting(true)

    try {
      const bookingData = {
        boatId: boat.id,
        boatName: boat.name,
        location: boat.location,
        startDate: format(startDate, "yyyy-MM-dd"),
        endDate: format(endDate, "yyyy-MM-dd"),
        totalPrice: calculateTotalPrice(),
        guestName: formData.get("guestName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        guests: Number.parseInt(formData.get("guests") as string),
        specialRequests: formData.get("specialRequests") as string,
      }

      await createBooking(bookingData)

      // Redirect to confirmation page with booking details
      const params = new URLSearchParams({
        boatName: boat.name,
        location: boat.location,
        startDate: format(startDate, "MMM dd, yyyy"),
        endDate: format(endDate, "MMM dd, yyyy"),
        totalPrice: calculateTotalPrice().toString(),
        guestName: bookingData.guestName,
        email: bookingData.email,
      })

      router.push(`/confirmation?${params.toString()}`)
    } catch (error) {
      console.error("Booking failed:", error)
      alert("Booking failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book This Boat</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => date < (startDate || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guestName">Full Name</Label>
            <Input id="guestName" name="guestName" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input id="guests" name="guests" type="number" min="1" max={boat.capacity} defaultValue="1" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Any special requirements or requests..."
            />
          </div>

          {startDate && endDate && (
            <div className="border rounded-lg p-4 bg-muted/50">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Price:</span>
                <span className="text-2xl font-bold">${calculateTotalPrice()}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days × ${boat.price}/day
              </p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting || !startDate || !endDate}>
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
