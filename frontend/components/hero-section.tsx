"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Anchor, ArrowRight, Star, Users, MapPin } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToBoats = () => {
    const boatsSection = document.querySelector("#boats-section")
    boatsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate-pulse-glow">
              <Anchor className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            Luxury Boat Rentals
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            Discover premium boats for your perfect getaway. From intimate sailboats to luxury yachts.
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-muted-foreground">Locations</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl hover-lift hover-glow group"
              onClick={scrollToBoats}
            >
              Explore Boats
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:border-primary bg-transparent hover:bg-primary/10 px-8 py-6 text-lg rounded-xl hover-lift"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
