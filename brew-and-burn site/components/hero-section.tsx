import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-white">
      <div className="absolute top-0 left-0 right-0 h-4 flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-secondary" : "bg-accent"}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 md:mb-12">
            <Image
              src="/logo.png"
              alt="Brew & Burn"
              width={500}
              height={500}
              className="w-80 md:w-[500px] h-auto"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance tracking-tight">
            <span className="text-primary">feeling the Burn</span> and grabbing a Brew
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 text-pretty leading-relaxed">
            {
              "Where coffee obsession meets the daily grind. Showcasing our favourite coffee shops while burning off the caffeine in Sheffield - and beyond!"
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://www.instagram.com/brew_and_burn/" target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  )
}
