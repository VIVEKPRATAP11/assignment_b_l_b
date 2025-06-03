"use client"

import { useState, useMemo, useEffect } from "react"
import { BoatCard } from "./boat-card"
import { BoatFilters } from "./boat-filters"
import { LoadingSkeleton } from "./loading-skeleton"
import type { Boat, FilterState } from "@/lib/types"
import { fetchBoats } from "@/lib/api"
import { X, Search } from "lucide-react"
import { Button } from "./ui/button"

export function BoatListing() {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    priceRange: [0, 2000],
    type: "",
  })

  const [boatsData, setBoatsData] = useState<Boat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBoats = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchBoats()
        setBoatsData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load boats")
        console.error("Failed to fetch boats:", err)
      } finally {
        setLoading(false)
      }
    }

    loadBoats()
  }, [])

  const filteredBoats = useMemo(() => {
    return boatsData.filter((boat: Boat) => {
      const matchesLocation = !filters.location || boat.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesPrice = boat.price >= filters.priceRange[0] && boat.price <= filters.priceRange[1]
      const matchesType = !filters.type || boat.type.toLowerCase().includes(filters.type.toLowerCase())

      return matchesLocation && matchesPrice && matchesType
    })
  }, [filters, boatsData])

  if (loading) {
    return (
      <div id="boats-section" className="space-y-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Available Boats
          </h2>
          <p className="text-muted-foreground text-lg">Choose from our premium fleet</p>
        </div>
        <BoatFilters filters={filters} onFiltersChange={setFilters} />
        <LoadingSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div id="boats-section" className="text-center py-16">
        <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto animate-scale-in">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-400" />
          </div>
          <p className="text-red-400 text-lg mb-4">Failed to load boats</p>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div id="boats-section" className="space-y-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Available Boats
        </h2>
        <p className="text-muted-foreground text-lg">Choose from our premium fleet of {boatsData.length} boats</p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <BoatFilters filters={filters} onFiltersChange={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBoats.map((boat, index) => (
          <div key={boat.id} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
            <BoatCard boat={boat} />
          </div>
        ))}
      </div>

      {filteredBoats.length === 0 && (
        <div className="text-center py-16 animate-scale-in">
          <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg mb-2">No boats found</p>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
          </div>
        </div>
      )}
    </div>
  )
}
