import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"

interface ConfirmationPageProps {
  searchParams: Promise<{
    boatName?: string
    location?: string
    startDate?: string
    endDate?: string
    totalPrice?: string
    guestName?: string
    email?: string
  }>
}

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const params = await searchParams
  const { boatName, location, startDate, endDate, totalPrice, guestName, email } = params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
              <p className="text-muted-foreground">
                Thank you for your booking. We've sent a confirmation email to {email}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold text-lg">Booking Details</h3>

                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">B</span>
                    </div>
                    <div>
                      <p className="font-medium">{boatName}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Rental Period</p>
                      <p className="text-sm text-muted-foreground">
                        {startDate} to {endDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Total Price</p>
                      <p className="text-sm text-muted-foreground">${totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Guest Information</h3>
                <p className="text-sm text-muted-foreground">Name: {guestName}</p>
                <p className="text-sm text-muted-foreground">Email: {email}</p>
              </div>

              <div className="flex gap-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Browse More Boats
                  </Button>
                </Link>
                <Link href="/admin" className="flex-1">
                  <Button className="w-full">View All Bookings</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
