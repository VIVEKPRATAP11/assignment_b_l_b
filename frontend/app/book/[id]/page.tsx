import { BookingForm } from "@/components/booking-form"
import { Header } from "@/components/header"
import { fetchBoatById } from "@/lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BookingPageProps {
  params: Promise<{ id: string }>
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { id } = await params

  let boat
  try {
    boat = await fetchBoatById(id)
  } catch (error) {
    console.error("Failed to fetch boat:", error)
    notFound()
  }

  if (!boat) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 mt-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Boats
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={boat.image || "/placeholder.svg"}
              alt={boat.name}
              width={600}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h1 className="text-3xl font-bold">{boat.name}</h1>
              <p className="text-muted-foreground mt-2">{boat.location}</p>
              <p className="text-2xl font-bold mt-2">${boat.price}/day</p>
              <p className="mt-4 text-muted-foreground">{boat.description}</p>
            </div>
          </div>

          <div>
            <BookingForm boat={boat} />
          </div>
        </div>
      </main>
    </div>
  )
}
