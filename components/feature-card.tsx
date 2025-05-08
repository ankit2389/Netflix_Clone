import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export default function FeatureCard({ title, description, image, imageAlt, reverse = false }: FeatureCardProps) {
  return (
    <div className="border-b-8 border-[#232323] py-12">
      <div
        className={`container mx-auto px-4 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{title}</h2>
          <p className="text-lg md:text-2xl">{description}</p>
        </div>

        <div className="flex-1 relative">
          <Image
            src={image || "/placeholder.svg?height=480&width=640"}
            alt={imageAlt}
            width={640}
            height={480}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
