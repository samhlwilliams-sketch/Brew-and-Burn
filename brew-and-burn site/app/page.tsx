import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MerchSection } from "@/components/merch-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <MerchSection />
      <CTASection />
      <Footer />
    </main>
  )
}
