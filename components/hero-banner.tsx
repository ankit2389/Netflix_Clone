import Image from "next/image"
import { Play, Info } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <div className="relative h-[80vh] flex items-end">
      <div className="absolute inset-0">
        <Image
          src="/netflixbgpage.png?height=700&width=1920"
          alt="Featured Content"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-24 md:pb-32">
        <div className="max-w-xl">
          <Image
            src="/placeholder.svg?height=150&width=500"
            alt="Stranger Things"
            width={500}
            height={150}
            className="w-full max-w-md mb-6"
          />

          <p className="text-lg md:text-xl text-white mb-6">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces and one strange little girl.
          </p>

          <div className="flex space-x-4">
            <Button className="bg-white hover:bg-white/90 text-black font-bold px-6 py-3 rounded flex items-center">
              <Play className="mr-2 h-6 w-6 fill-black" /> Play
            </Button>

            <Button
              variant="secondary"
              className="bg-gray-500/70 hover:bg-gray-500/90 text-white font-bold px-6 py-3 rounded flex items-center"
            >
              <Info className="mr-2 h-6 w-6" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
