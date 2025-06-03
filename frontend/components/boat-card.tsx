"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Star, Heart, ArrowRight } from "lucide-react"
import type { Boat } from "@/lib/types"

interface BoatCardProps {
  boat: Boat
}

export function BoatCard({ boat }: BoatCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="group overflow-hidden hover-lift gradient-card border-0 shadow-2xl">
      <div className="relative overflow-hidden">
        {/* Image Container */}
        <div className="relative h-56 bg-muted">
          {!imageLoaded && <div className="absolute inset-0 skeleton" />}
          <Image
            src={boat.image || "/placeholder.svg"}
            alt={boat.name}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
              {boat.type}
            </Badge>
          </div>

          {/* Like Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? "fill-red-500 text-red-500 scale-110" : "text-white"
              }`}
            />
          </Button>

          {/* Rating */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-medium">4.8</span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                {boat.name}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{boat.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-sm">Up to {boat.capacity} guests</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">${boat.price}</div>
                <div className="text-xs text-muted-foreground">per day</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{boat.description}</p>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Link href={`/book/${boat.id}`} className="w-full">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}
