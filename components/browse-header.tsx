"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, Search, ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NetflixLogo from "./netflix-logo"

const navLinks = [
  { text: "Home", href: "/browse" },
  { text: "TV Shows", href: "#" },
  { text: "Movies", href: "#" },
  { text: "New & Popular", href: "#" },
  { text: "My List", href: "#" },
  { text: "Browse by Languages", href: "#" },
]

export default function BrowseHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center">
          <Link href="/browse" className="mr-8">
            <NetflixLogo className="h-7 w-auto" />
          </Link>

          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {link.text}
              </Link>
            ))}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex md:hidden items-center text-sm text-gray-300 hover:text-white">
              Browse <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map((link, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={link.href} className="w-full">
                    {link.text}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            {showSearch ? (
              <div className="flex items-center bg-black border border-white px-2">
                <Search className="h-5 w-5 text-white" />
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="bg-transparent border-none text-white text-sm p-1 w-40 focus:outline-none"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <button onClick={() => setShowSearch(true)}>
                <Search className="h-6 w-6 text-white" />
              </button>
            )}
          </div>

          <button>
            <Bell className="h-6 w-6 text-white" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <div className="w-8 h-8 rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="ml-1 h-4 w-4 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Profiles</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Profile 2"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Profile 2</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Kids"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Kids</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Help Center</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out of Netflix</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
