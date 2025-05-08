import Link from "next/link"
import { Globe } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const footerLinks = [
  { text: "FAQ", href: "#" },
  { text: "Help Centre", href: "#" },
  { text: "Account", href: "#" },
  { text: "Media Centre", href: "#" },
  { text: "Investor Relations", href: "#" },
  { text: "Jobs", href: "#" },
  { text: "Ways to Watch", href: "#" },
  { text: "Terms of Use", href: "#" },
  { text: "Privacy", href: "#" },
  { text: "Cookie Preferences", href: "#" },
  { text: "Corporate Information", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Speed Test", href: "#" },
  { text: "Legal Notices", href: "#" },
  { text: "Only on Netflix", href: "#" },
]

export default function Footer() {
  return (
    <footer className="py-12 text-[#737373]">
      <div className="container mx-auto px-4">
        <p className="mb-6">
          <Link href="#" className="hover:underline">
            Questions? Contact us.
          </Link>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm hover:underline">
              {link.text}
            </Link>
          ))}
        </div>

        {/* <Select defaultValue="english" className="w-[140px] mb-6">
          <SelectTrigger className="bg-transparent border border-gray-600 text-white">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">हिन्दी</SelectItem>
          </SelectContent>
        </Select> */}

        <p className="text-sm">Netflix India</p>
      </div>
    </footer>
  )
}
