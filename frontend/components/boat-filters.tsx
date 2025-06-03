"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Search, Filter, X } from "lucide-react"
import type { FilterState } from "@/lib/types"

interface BoatFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function BoatFilters({ filters, onFiltersChange }: BoatFiltersProps) {
  const handleLocationChange = (value: string) => {
    onFiltersChange({ ...filters, location: value })
  }

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: value })
  }

  const handleTypeChange = (value: string) => {
    onFiltersChange({ ...filters, type: value === "all" ? "" : value })
  }

  const clearFilters = () => {
    onFiltersChange({
      location: "",
      priceRange: [0, 2000],
      type: "",
    })
  }

  const hasActiveFilters = filters.location || filters.type || filters.priceRange[0] > 0 || filters.priceRange[1] < 2000

  return (
    <Card className="gradient-card border-0 shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl">Filter Boats</span>
          </div>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Filter */}
          <div className="space-y-3">
            <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-400" />
              Location
            </Label>
            <div className="relative">
              <Input
                id="location"
                placeholder="Search by location..."
                value={filters.location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 pl-4"
              />
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Price Range:
              <span className="text-primary font-bold ml-2">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </span>
            </Label>
            <div className="px-2 py-4">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                max={2000}
                min={0}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </div>

          {/* Boat Type Filter */}
          <div className="space-y-3">
            <Label htmlFor="type" className="text-sm font-medium">
              Boat Type
            </Label>
            <Select value={filters.type || "all"} onValueChange={handleTypeChange}>
              <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border/50">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="yacht">🛥️ Yacht</SelectItem>
                <SelectItem value="sailboat">⛵ Sailboat</SelectItem>
                <SelectItem value="catamaran">🚤 Catamaran</SelectItem>
                <SelectItem value="speedboat">🏎️ Speedboat</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {filters.location && (
                <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  <span>Location: {filters.location}</span>
                  <button
                    onClick={() => handleLocationChange("")}
                    className="hover:bg-primary/30 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {filters.type && (
                <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  <span>Type: {filters.type}</span>
                  <button
                    onClick={() => handleTypeChange("all")}
                    className="hover:bg-primary/30 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {(filters.priceRange[0] > 0 || filters.priceRange[1] < 2000) && (
                <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  <span>
                    Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </span>
                  <button
                    onClick={() => handlePriceRangeChange([0, 2000])}
                    className="hover:bg-primary/30 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
