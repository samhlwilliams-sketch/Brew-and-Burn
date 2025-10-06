import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{"Keep Grinding with Us"}</h2>
          <p className="text-lg md:text-xl mb-10 text-pretty leading-relaxed opacity-90">
            {"Get regular coffee reviews, brewing tips, and the motivation to fuel your daily grind."}
          </p>

          <Button
            size="lg"
            asChild
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg"
          >
            <a href="https://www.instagram.com/brew_and_burn/" target="_blank" rel="noopener noreferrer">
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
