"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Anchor, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Anchor className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Book Luxury Boat
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
          >
            Browse Boats
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/admin"
            className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
          >
            Admin
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/admin">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Admin Panel
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/50 animate-slide-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Boats
            </Link>
            <Link
              href="/admin"
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                Admin Panel
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
