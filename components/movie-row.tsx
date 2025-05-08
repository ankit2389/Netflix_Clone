"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"

// Mock movie data - in a real app, this would come from TMDB API
const MOCK_MOVIES = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    posterPath: `/images/movie-${(i % 5) + 1}.jpg`,
  }))

interface MovieRowProps {
  title: string
  loading?: boolean
}

export default function MovieRow({ title, loading = false }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="px-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="relative group">
        <button
          className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <div ref={rowRef} className="flex space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth">
          {loading
            ? // Skeleton loaders
              Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-[160px] md:w-[200px]">
                    <Skeleton className="h-[240px] md:h-[300px] w-full rounded" />
                  </div>
                ))
            : // Movie posters
              MOCK_MOVIES.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/browse/movie/${movie.id}`}
                  className="flex-shrink-0 w-[160px] md:w-[200px] transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-[240px] md:h-[300px] w-full">
                    <Image
                      src={movie.posterPath || "/placeholder.svg?height=300&width=200"}
                      alt={movie.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </Link>
              ))}
        </div>

        <button
          className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  )
}
