import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import LandingHeader from "@/components/landing-header"
import Footer from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <LandingHeader />

      <div className="relative min-h-[700px] flex items-center justify-center py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/netflixbgpage.png?height=700&width=1920"
            alt="Netflix Hero"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 bg-black/75 p-16 rounded-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                className="w-full p-4 bg-[#333] rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-[#333] rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3">
              Sign In
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                >
                  Remember me
                </label>
              </div>

              <Link href="#" className="text-sm text-gray-400 hover:underline">
                Need help?
              </Link>
            </div>
          </form>

          <div className="mt-16">
            <p className="text-gray-500">
              New to Netflix?{" "}
              <Link href="/" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>

            <p className="text-xs text-gray-500 mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Learn more.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
