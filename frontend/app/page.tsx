import { BoatListing } from "@/components/boat-listing"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 py-16">
        <BoatListing />
      </main>
      <Footer />
    </div>
  )
}
