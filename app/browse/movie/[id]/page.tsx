"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, Plus, ThumbsUp, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import BrowseHeader from "@/components/browse-header"
import MovieRow from "@/components/movie-row"
import Footer from "@/components/footer"

// Mock movie details - in a real app, this would come from TMDB API
const MOCK_MOVIE = {
  id: 1,
  title: "Stranger Things",
  overview:
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  backdropPath: "/images/banner.jpg",
  posterPath: "/images/movie-1.jpg",
  releaseDate: "2016",
  runtime: "50m",
  rating: "16+",
  genres: ["Sci-Fi", "Horror", "Drama"],
  cast: ["Winona Ryder", "David Harbour", "Finn Wolfhard", "Millie Bobby Brown"],
  director: "The Duffer Brothers",
}

export default function MovieDetailPage({ params }: { params: { id: string } }) {
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
        {/* Hero Banner */}
        <div className="relative h-[70vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={MOCK_MOVIE.backdropPath || "/placeholder.svg?height=700&width=1920"}
              alt={MOCK_MOVIE.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pb-24 md:pb-32 pt-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{MOCK_MOVIE.title}</h1>

              <div className="flex items-center space-x-4 mb-4 text-sm">
                <span className="text-green-500">97% Match</span>
                <span>{MOCK_MOVIE.releaseDate}</span>
                <span className="border border-gray-600 px-1">{MOCK_MOVIE.rating}</span>
                <span>{MOCK_MOVIE.runtime}</span>
                <span className="border border-gray-600 px-1 rounded text-xs">HD</span>
              </div>

              <p className="text-lg md:text-xl mb-6">{MOCK_MOVIE.overview}</p>

              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-white hover:bg-white/90 text-black font-bold px-6 py-3 rounded flex items-center">
                  <Play className="mr-2 h-6 w-6 fill-black" /> Play
                </Button>

                <Button variant="outline" className="rounded-full p-3">
                  <Plus className="h-6 w-6" />
                </Button>

                <Button variant="outline" className="rounded-full p-3">
                  <ThumbsUp className="h-6 w-6" />
                </Button>

                <Button variant="outline" className="rounded-full p-3 ml-auto">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">97% Match</span>
                  <span>{MOCK_MOVIE.genres.join(", ")}</span>
                </div>

                <h3 className="text-xl font-medium mb-2">About {MOCK_MOVIE.title}</h3>
                <p>{MOCK_MOVIE.overview}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">More Like This</h3>
                <MovieRow title="" loading={loading} />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="text-gray-400">Cast:</span> {MOCK_MOVIE.cast.join(", ")}
              </div>

              <div className="mb-4">
                <span className="text-gray-400">Genres:</span> {MOCK_MOVIE.genres.join(", ")}
              </div>

              <div className="mb-4">
                <span className="text-gray-400">Director:</span> {MOCK_MOVIE.director}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
