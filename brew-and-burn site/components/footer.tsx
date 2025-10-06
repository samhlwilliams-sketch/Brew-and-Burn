import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-6 h-6" />
            <span className="text-xl font-bold">{"Brew & Burn"}</span>
          </div>
          <p className="text-secondary-foreground/80 leading-relaxed">
            {"Your trusted source for honest coffee reviews since 2025."}
          </p>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>{"© 2025 Brew & Burn. All rights reserved. Made with ☕ and love."}</p>
        </div>
      </div>
    </footer>
  )
}
