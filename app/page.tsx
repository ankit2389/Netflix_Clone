import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import LandingHeader from "@/components/landing-header"
import FeatureCard from "@/components/feature-card"
import FaqAccordion from "@/components/faq-accordion"
import Footer from "@/components/footer"
import MovieCarousel from "@/components/MovieCarousel"

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-[700px] border-b-8 border-[#232323]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/netflixbgpage.png?height=700&width=1920"
            alt="Netflix Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        </div>

        <div className="relative z-10">
          <LandingHeader />

          <div className="container mx-auto px-4 py-24 text-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">Unlimited movies, TV shows and more</h1>
            <p className="text-xl md:text-2xl mb-5">Watch anywhere. Cancel anytime.</p>
            <p className="text-lg md:text-xl mb-5">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="flex flex-col md:flex-row gap-2 justify-center mt-8">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 bg-black/40 border border-gray-600 rounded text-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded">
                Get Started <ChevronRight className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MovieCarousel />  {/* ✅ Now it's being used */}
      {/* Features Section */}
      <div className="py-12">
        <FeatureCard
          title="Enjoy on your TV"
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image="/tv.png"
          imageAlt="TV"
          reverse={false}
        />

        <FeatureCard
          title="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
          image="/netflicmobile.png"
          imageAlt="Mobile"
          reverse={true}
        />

        <FeatureCard
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image="/netflixwatch.png"
          imageAlt="Devices"
          reverse={false}
        />

        <FeatureCard
          title="Create profiles for children"
          description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image="/netflixkid.png"
          imageAlt="Children"
          reverse={true}
        />
      </div>

      {/* FAQ Section */}
      <div className="py-12 border-b-8 border-[#232323]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Frequently Asked Questions</h2>

          <FaqAccordion />

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl mb-5">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 bg-black/40 border border-gray-600 rounded text-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded">
                Get Started <ChevronRight className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
