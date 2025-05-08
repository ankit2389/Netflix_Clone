import Link from "next/link"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import NetflixLogo from "./netflix-logo"

export default function LandingHeader() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <NetflixLogo />

      <div className="flex items-center gap-3">
        <Select defaultValue="english">
          <SelectTrigger className="w-[140px] bg-transparent border border-gray-600 text-white">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">हिन्दी</SelectItem>
          </SelectContent>
        </Select>

        <Link href="/login">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">Sign In</Button>
        </Link>
      </div>
    </header>
  )
}
