"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Anchor,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, this would call an API to subscribe the user
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="mt-24 border-t border-border/50 bg-gradient-to-b from-background to-black/90">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Book Luxury Boat
              </span>
            </div>

            <p className="text-muted-foreground">
              Premium boat rental service offering luxury yachts, sailboats, catamarans, and speedboats for
              unforgettable water adventures.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@bookluxuryboat.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Marina Way, Miami, FL 33101</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/boats"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Boat Categories */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold">Boat Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/?type=yacht"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Luxury Yachts
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=sailboat"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Sailboats
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=catamaran"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Catamarans
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=speedboat"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Speedboats
                </Link>
              </li>
              <li>
                <Link
                  href="/special-offers"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for special offers, new boats, and sailing tips.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 pr-12"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-2 text-green-400 text-sm animate-fade-in">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">Follow Us</h4>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Book Luxury Boat. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
