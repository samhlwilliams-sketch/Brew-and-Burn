import { Coffee, Users, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Coffee,
    title: "Real Reviews",
    description:
      "From coffee enthusiasts whilst we burn off the caffeine playing padel, pickleball, running, golf or the other sports in steel city.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with hustlers and coffee enthusiasts who understand the grind.",
  },
  {
    icon: TrendingUp,
    title: "Trending Brews",
    description: "Discover the hottest roasts powering today's go-getters.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">{"Why Brew & Burn?"}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Because great coffee isn't just a drink—it's the fuel that powers your ambitions and keeps you grinding."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow border-2">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-3xl">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
