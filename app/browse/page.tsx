"use client"

import { useState, useEffect } from "react"
import BrowseHeader from "@/components/browse-header"
import HeroBanner from "@/components/hero-banner"
import MovieRow from "@/components/movie-row"
import Footer from "@/components/footer"

// Mock data - in a real app, this would come from TMDB API
const MOCK_CATEGORIES = [
  { id: 1, name: "Popular on Netflix" },
  { id: 2, name: "Trending Now" },
  { id: 3, name: "TV Shows" },
  { id: 4, name: "Movies" },
  { id: 5, name: "New Releases" },
  { id: 6, name: "My List" },
]

export default function BrowsePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      <BrowseHeader />

      <main>
        <HeroBanner />

        <div className="py-8 space-y-8">
          {MOCK_CATEGORIES.map((category) => (
            <MovieRow key={category.id} title={category.name} loading={loading} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
